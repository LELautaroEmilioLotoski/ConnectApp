

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const deleteComment = async(id: string, userToken: string) => {
    const result = await fetch(`${APIURL}comments/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${userToken}`,
            "Content-Type": "application/json",
        },
    });
    console.log(result);
    
    const userData = await result.json();
    console.log(userData);
    
    return userData;
}
