

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const getUserPublications = async(id: string) => {
    const result = await fetch(`${APIURL}posts/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    const userData = result.json()
    return userData;
}