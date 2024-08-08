import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/todoTypes";
const fetchTodoFromServer = createAsyncThunk("todos/fetchTodoFromServer", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo");
    const data = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const addNewTodoItem = createAsyncThunk("todos/addNewTodoItem", async (todoItem: ITodoItem, { rejectWithValue }) => {
  try {
    const res = await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    });
    const data = await res.json();
    return data as ITodoItem;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const updateTodoItem = createAsyncThunk("todos/updateTodoItem", async (todoItem: ITodoItem, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const deleteTodoItem = createAsyncThunk("todos/deleteTodoItem", async (todoItem: ITodoItem, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const toggleTodoItem = createAsyncThunk("todos/toggleTodoItem", async (todoItem: ITodoItem, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todoItem, completed: !todoItem.completed }),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const todoThunk = {
  fetchTodoFromServer,
  addNewTodoItem,
  updateTodoItem,
  deleteTodoItem,
  toggleTodoItem,
};
export default todoThunk;
