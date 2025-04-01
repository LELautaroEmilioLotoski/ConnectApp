import { ICommentData } from "@/interfaces/comments/comments";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const newComment = async (userToken: string, publicationsData: ICommentData, postId: string) => {
  const result = await fetch(`${APIURL}comments/${postId}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${userToken}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(publicationsData),
  });
  console.log(result);
  
  const data = await result.json();
  
  return data;
};
