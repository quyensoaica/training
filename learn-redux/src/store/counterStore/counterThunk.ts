import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
