import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// !удалить

// type setModalAuthPayload = {
//     showModal: boolean;
// }

export type modalAuthState = {
    showModal: boolean;
}

const initialState: modalAuthState = {
    showModal: false,
};

const slice = createSlice({
   name: "modalAuth",
   initialState,
   reducers: {
     setModalAuth : (state, action: PayloadAction<modalAuthState>) => {
        state.showModal = action.payload.showModal;
     }
   }
});


export const modalAuthActions = slice.actions;
export const modalAuthReducer = slice.reducer;