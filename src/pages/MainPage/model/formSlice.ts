import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userI {
  name: string;
  email: string;
}

interface formStateI {
  userData: userI | null;
  isInTable: boolean;
}

// Init
const name = "form";
const initialState: formStateI = {
  userData: null,
  isInTable: false,
};

// Slice
const formSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userI>) => {
      state.userData = action.payload;
      state.isInTable = true;
    },
    removeUserData: (state) => {
      state.isInTable = false;
      state.userData = null;
    },
  },

  extraReducers: {},
});

export const { setUserData, removeUserData } = formSlice.actions;
export default formSlice.reducer;
