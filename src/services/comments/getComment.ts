

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const getComment = async(postId: string, userToken: string) => {
    const result = await fetch(`${APIURL}comments/${postId}/comments`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
    })

    const userData = result.json()
    // console.log(userData);
    
    return userData;
}