import { useUserContext } from "@/context/user/UserContext";
import { ICommentData } from "@/interfaces/comments/comments";
import { newComment } from "@/services/comments/createComment";
import { Send } from "lucide-react";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addComments } from "@/redux/commentsSlice";

const CommentInput = ({ postId }: { postId: any }) => {
  const { user } = useUserContext();
  const dispatch = useDispatch();

  if (!user) return null;

  const [content, setContent] = useState<ICommentData>({
    content: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContent((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      const cookieToken = Cookies.get("userToken");
      if (!cookieToken) return;
  
      const res = await newComment(cookieToken, content, postId.id);
      console.log("Nuevo comentario:", res); // <-- Verifica la respuesta
  
      if (res) {
        dispatch(addComments(res));
        setContent({ content: "" });
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al agregar comentario:", error);
    }
  };
  

  return (
    <div>
      <div className="p-4 pt-6">
        <div className="flex w-full gap-2 items-center">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full">
              <img
                src={user?.profilePicture || "/placeholder.svg?height=32&width=32"}
                alt={user?.name || "Usuario"}
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Escribe un comentario..."
            className="input input-bordered flex-1 bg-gray-100 h-10"
            onChange={handleChange}
            name="content"
            value={content.content} // Asegurar que el input se limpie
          />
          <button onClick={handleClick}>
            <Send color="#749dfb" size={"20px"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
