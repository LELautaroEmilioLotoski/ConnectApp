
export const getUserId = () => {
    const getUserData = localStorage.getItem("userData");
    if(!getUserData) return null;
    const user = JSON.parse(getUserData)
    const {id} = user;
    return id;
};

