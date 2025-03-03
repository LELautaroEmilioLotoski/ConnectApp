import { getUserById } from "@/services/user/getUser/getUserById";

export const getUser = async (userId: string): Promise<any> => {
  try {
    const res = await getUserById(userId);

    if (res) localStorage.setItem("userData", JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
};
