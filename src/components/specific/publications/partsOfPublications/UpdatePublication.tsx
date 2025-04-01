import { useUserContext } from "@/context/user/UserContext";
import { IPublicationsData } from "@/interfaces/publications/publications";
import { IUpdatePublicationData } from "@/interfaces/publications/updatePublication";
import { updatePost } from "@/services/posts/updatePost";
import React, { useState } from "react";

const UpdatePublication = ({
  postId,
  timeAgo,
  publication,
}: {
  postId: any;
  timeAgo: string;
  publication: IPublicationsData;
}) => {
  const { user } = useUserContext();
  const [content, setContent] = useState<IUpdatePublicationData>({
    content: publication.content,
    image: publication.image,
    video: publication.video,
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickUpdate = async () => {
    try {
      const id = postId.id;

      const isConfirmed = confirm("¿Deseas confirmar los cambios?");
      if (!isConfirmed) {
        window.location.reload();
        return;
      }
      const res = await updatePost(id, content);
      console.log(res);

      if (res) {
        alert("¡Se ha editado correctamente!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-white shadow-xl rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full verflow-hidden">
            <img
              src={
                user?.profilePicture || "/placeholder.svg?height=40&width=40"
              }
              alt={user?.name || "Usuario"}
            />
          </div>
        </div>
        <div>
          <p className="font-medium">{user?.name}</p>
          <p className="text-xs opacity-70">{timeAgo}</p>
        </div>
      </div>
      {content ? (
        <div className="mt-4">
          <textarea
            name="content"
            value={content.content}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            placeholder="Edita tu publicación..."
          />
          <button
            onClick={handleClickUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mt-4"
          >
            Actualizar Publicación
          </button>
        </div>
      ) : (
        <div className="text-center text-red-500 font-semibold mt-4">
          <h2>Algo salió mal</h2>
        </div>
      )}
    </div>
  );
};

export default UpdatePublication;
