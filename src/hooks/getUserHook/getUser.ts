import { getUserById } from "@/services/user/getUser/getUserById";

export const getUser = async (userId: string) => {
  try {
    const res = await getUserById(userId);
    const { id, ...dataUser } = res;

    if (res) localStorage.setItem("userData", JSON.stringify(dataUser));
  } catch (error) {
    console.log(error);
  }
};
