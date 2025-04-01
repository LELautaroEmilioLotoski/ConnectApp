"use client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getComment } from "@/services/comments/getComment";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, removeComment } from "@/redux/commentsSlice";
import { useUserContext } from "@/context/user/UserContext";
import { IPublicationsData } from "@/interfaces/publications/publications";
import { deleteComment } from "@/services/comments/deleteComment";
import { Trash2 } from "lucide-react";

const GetComment = ({ postId }: { postId: IPublicationsData }) => {
  const { user } = useUserContext();
  const dispatch = useDispatch();
  const commentsState = useSelector((state: any) => state.comments);
  const userCookie = Cookies.get("userToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getComment(postId.id, userCookie!);
        dispatch(fetchComments(res.comments));
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
      }
    };

    fetchData();
  }, [postId, dispatch]);

  const postComments = commentsState.comments.filter(
    (event: any) => event.postId === postId.id
  );
  const commentCount = postComments.length;

  const handleClick = async (commentId: string) => {
    try {
      const res = await deleteComment(commentId, userCookie!);
      if (res) {
        dispatch(removeComment(commentId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      {commentsState.comments.length >= 0 ? (
        <div>
          <h3 className="m-4">Comentarios ({commentCount})</h3>
          {postComments.length >= 0 ? (
            <div className="p-4 space-y-4">
              {postComments.map((event: any) => {
                const formattedDate = format(
                  new Date(event.createdAt),
                  "d 'de' MMMM 'de' yyyy",
                  { locale: es }
                );
                const timeAgo = format(new Date(event.createdAt), "PPp", {
                  locale: es,
                });

                return (
                  <div key={event.id} className="flex gap-2">
                    <div className="avatar">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={
                            user?.profilePicture ||
                            "/placeholder.svg?height=32&width=32"
                          }
                          alt={user?.name || "Comentarista"}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <p className="font-medium text-sm">
                          {user?.id === event.userId ? user?.name : "Usuario"}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-sm">{event.content}</p>
                          {user?.id === event.userId && (
                            <button
                              onClick={() => handleClick(event.id)}
                              className="text-red-300"
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-4 mt-1 text-xs opacity-70">
                        <button className="font-medium">Me gusta</button>
                        <button className="font-medium">Responder</button>
                        <span>{timeAgo || "Hace un momento"}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
            </div>
          )}
        </div>
      ) : (
        <p className="p-4">Agrega un comentario</p>
      )}
    </div>
  );
};

export default GetComment;
