import React from "react";
import { useUserContext } from "@/context/user/UserContext";
import { deleteUserPublications } from "@/services/posts/deletePublicaction";

const CardHeaderPublications = ({
  timeAgo,
  postId,
}: {
  timeAgo: string;
  postId: any;
}) => {
  const { user } = useUserContext();

  const handleClick = async () => {
    try {
      const isConfirmed = confirm("Deseas eliminar la publicación?");
      if(!isConfirmed) return;

      const res = await deleteUserPublications(postId.id);

      if (res) {
        alert("Se ha eliminado con éxito");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-body p-4 pb-0">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-52"
          >
            <li>
              <a>Guardar publicación</a>
            </li>
            <li>
              <a>Reportar</a>
            </li>
            <li>
              <button onClick={handleClick}>Eliminar publicación</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderPublications;
