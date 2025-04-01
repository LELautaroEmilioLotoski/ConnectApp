

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const deleteUserPublications = async(id: string) => {
    const result = await fetch(`${APIURL}posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const userData = await result.json();
    return userData;
}
