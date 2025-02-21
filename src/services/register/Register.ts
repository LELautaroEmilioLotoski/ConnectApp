import { IUserDataRegister } from "@/interfaces/userDataAuth/userDataRegister";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const register = async(userData: IUserDataRegister) => {
    const result = await fetch(`${APIURL}auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(result);
      
      const data = result.json();
      console.log(data);
      
}