import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // aquí van tus actions y reducers
  },
});

export const { actions, reducer } = usersSlice;
