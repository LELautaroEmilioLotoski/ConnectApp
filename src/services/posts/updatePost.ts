
const APIURL = process.env.NEXT_PUBLIC_API_URL

export const updatePost = async(id: string, newData: any) => {
    try {
        const response = await fetch(`${APIURL}posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        });        

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
    }
}



