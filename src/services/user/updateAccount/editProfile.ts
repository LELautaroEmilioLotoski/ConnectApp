import { IUserDataUpdate } from "@/interfaces/editProfile/editProfile";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const editProfile = async (
  id: string,
  userData: IUserDataUpdate
): Promise<IUserDataUpdate> => {
  const res = await fetch(`${APIURL}users/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data: IUserDataUpdate = await res.json();
  return data;
};
