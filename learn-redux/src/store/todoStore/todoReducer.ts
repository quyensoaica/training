import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import todoThunk from "./todoAction";
import { ITodoItem } from "../../types/todoTypes";
import { toast } from "react-toastify";

// omit imports and state

interface initialState {
  isLoading: boolean;
  todoItem: ITodoItem;
  todoList: ITodoItem[];
  action: string;
}
const initialState: initialState = {
  isLoading: false,
  todoItem: { id: "", title: "", completed: false },
  todoList: [] as ITodoItem[],
  action: "create",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // omit reducer cases
    setAction: (state, action) => {
      state.action = action.payload;
    },
    setTodoItem: (state, action) => {
      state.todoItem = action.payload;
    },
    toggleAllTodoItems: (state) => {
      const check = state.todoList.every((todo) => todo.completed);
      state.todoList = state.todoList.map((todo) => ({ ...todo, completed: !check }));
      toast.success(check ? "Uncheck all todos successfully!" : "Check all todos successfully!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todoThunk.fetchTodoFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.fetchTodoFromServer.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.isLoading = false;
      })
      .addCase(todoThunk.fetchTodoFromServer.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      })

      .addCase(todoThunk.addNewTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.addNewTodoItem.fulfilled, (state, action: PayloadAction<ITodoItem>) => {
        const newTodoItem = action.payload;
        state.todoList.push(newTodoItem);
        toast.success("Add new todo successfully!");
        state.isLoading = false;
      })
      .addCase(todoThunk.addNewTodoItem.rejected, (state, action) => {
        console.log(action.error.message);
        toast.error(action.error.message);
        state.isLoading = false;
      })

      .addCase(todoThunk.updateTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.updateTodoItem.fulfilled, (state, action: PayloadAction<ITodoItem>) => {
        state.todoList = state.todoList.map((item) => (item.id === action.payload.id ? action.payload : item));
        toast.success("Update todo successfully!");
        state.isLoading = false;
      })
      .addCase(todoThunk.updateTodoItem.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })

      .addCase(todoThunk.deleteTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.deleteTodoItem.fulfilled, (state, action: PayloadAction<ITodoItem>) => {
        state.todoList = state.todoList.filter((item) => item.id !== action.payload.id);
        toast.success("Delete todo successfully!");
        state.isLoading = false;
      })
      .addCase(todoThunk.deleteTodoItem.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })

      .addCase(todoThunk.toggleTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.toggleTodoItem.fulfilled, (state, action: PayloadAction<ITodoItem>) => {
        state.todoList = state.todoList.map((item) => (item.id === action.payload.id ? action.payload : item));
        toast.success("Toggle todo successfully!");
        state.isLoading = false;
      })
      .addCase(todoThunk.toggleTodoItem.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      });
  },
});
const { setAction, setTodoItem, toggleAllTodoItems } = todoSlice.actions;

export const todoAction = {
  setAction,
  setTodoItem,
  toggleAllTodoItems,
};

export default todoSlice.reducer;
