import { IUserDataLogin } from "@/interfaces/userDataAuth/userDataLogin";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (userData: IUserDataLogin) => {
  const request = await fetch(`${APIURL}auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = request.json();
  return data;
};
