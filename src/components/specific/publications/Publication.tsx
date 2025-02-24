"use client";
import { IPublications } from "@/interfaces/publications/publications";
import { Camera } from "lucide-react";
import React, { useState } from "react";

/*
{
  "success": true,
  "message": "Post created successfully",
  "post": {
    "id": 101,
    "content": "¡Hola, mundo!",
    "image": "https://example.com/post.jpg",
    "video": "https://example.com/videoxd",
    "createdAt": "2025-02-18T10:00:00Z",
    "likes": 0,
    "comments": 0,
    "userId": 1,
  },
}
  */

const publicaciones = [
  {
    post: {
      id: 0,
      content: "",
      image: "",
      video: "",
      createdAt: "",
      likes: 0,
      comments: 0,
      userId: 0,
    },
  },
];

const Publication = () => {
  const [content, setContent] = useState<IPublications>({
    id: 0,
    content: "",
    image: "",
    video: "",
    createdAt: "",
    likes: 0,
    comments: 0,
    userId: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const newPublication = publicaciones.map(
      (info) => (info.post.content = content.content)
    );
    console.log(publicaciones);    
    return newPublication;
  };

  return (
    <div className="w-[600px] h-[500px]">
      <div className="col-span-2 space-y-6">
        <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl text-black">Haz una publicación</h2>
        <div className="p-4">
          <textarea
            name="content"
            className="w-full p-2 border bg-gray-100 border-black/35 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Crear publicación"
            rows={3}
            value={content.content}
            onChange={handleChange}
          />
        </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2">
              <button className="text-white hover:text-white rounded-lg btn btn-outline btn-info">
                <Camera size={20} />
              </button>
            </div>
            <button
              onClick={handleClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
