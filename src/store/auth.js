import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer

//name -> it can be random name and we can mutates the array and array, object because redux/toolkit
// internally overrides the method which state are changes and create a new object

