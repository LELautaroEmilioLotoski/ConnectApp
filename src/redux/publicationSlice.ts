import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Publication {
    id: number;
    title: string;
    content: string;
}

interface PublicationsState {
    publications: Publication[];
    publicationIds: number[]; // Nuevo array para guardar los IDs
}

const initialState: PublicationsState = {
    publications: [],
    publicationIds: []
};

const publicationSlice = createSlice({
    name: "publications",
    initialState,
    reducers: {
        fetchPublications: (state, action: PayloadAction<Publication[]>) => {
            state.publications = action.payload;
            state.publicationIds = action.payload.map(pub => pub.id); // Guardar IDs
        },
        addPublication: (state, action: PayloadAction<Publication>) => {
            state.publications.push(action.payload);
            state.publicationIds.push(action.payload.id);
        },
        setPublicationIds: (state, action: PayloadAction<number[]>) => {
            state.publicationIds = action.payload;
        }
    } 
});

export const { fetchPublications, addPublication, setPublicationIds } = publicationSlice.actions;
export default publicationSlice.reducer;
