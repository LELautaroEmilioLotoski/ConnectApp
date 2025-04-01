import { IPublicationsData } from "@/interfaces/publications/publications";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const newPublication = async (publicationsData: IPublicationsData) => {
  const result = await fetch(`${APIURL}posts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(publicationsData),
  });
  const data = result.json();
  return data;
};
