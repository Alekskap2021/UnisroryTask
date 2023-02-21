import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userDataI {
  name: string;
  email: string;
}

interface registrationStateI {
  userData: userDataI | null;
  isInTable: boolean;
  isTableVisible: boolean;
}

// Init
const name = "form";
const initialState: registrationStateI = {
  userData: null,
  isInTable: false,
  isTableVisible: false,
};

// Slice
const registrationSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userDataI>) => {
      state.userData = action.payload;
      state.isInTable = true;
      state.isTableVisible = true;
    },
    removeUserData: (state) => {
      state.isInTable = false;
      state.userData = null;
    },
  },

  extraReducers: {},
});

export const { setUserData, removeUserData } = registrationSlice.actions;
export default registrationSlice.reducer;
