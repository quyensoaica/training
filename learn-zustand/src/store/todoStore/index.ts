import { create } from "zustand";
import { ITodoItem } from "../../types/todoTypes";

type TodoState = {
  todoItem: ITodoItem;
  todoList: ITodoItem[];
  action: "create" | "update";
  loading: boolean;
};

type TodoAction = {
  setTodoItem: (todoItem: ITodoItem) => void;
  addTodoItem: (todoItem: ITodoItem) => void;
  setAction: (action: "create" | "update") => void;
  updateTodoItem: (todoItem: ITodoItem) => void;
  deleteTodoItem: (todoItem: ITodoItem) => void;
  toggleTodoItem: (todoItem: ITodoItem) => void;
  toggleAllTodoItems: () => void;
  getTodoListFromServer: () => void;
  setLoading: (loading: boolean) => void;
};

const initialTodoState: TodoState = {
  todoItem: {
    id: "",
    title: "",
    completed: false,
  },
  todoList: [],
  action: "create",
  loading: false,
};

// Create your store, which includes both state and (optionally) actions
const useTodoStore = create<TodoState & TodoAction>((set) => ({
  ...initialTodoState,
  setTodoItem: (todoItem) => set({ todoItem }),
  setAction: (action) => set({ action }),
  addTodoItem: async (todoItem) => {
    set((state) => ({
      todoList: [...state.todoList, todoItem],
    }));
    await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    });
  },
  updateTodoItem: async (todoItem) => {
    set((state) => ({
      todoList: state.todoList.map((item) => (item.id === todoItem.id ? todoItem : item)),
    }));
    await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    });
  },
  deleteTodoItem: async (todoItem) => {
    set((state) => ({
      todoList: state.todoList.filter((item) => item.id !== todoItem.id),
    }));
    await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoItem),
    });
  },
  toggleTodoItem: async (todoItem) => {
    const newTodoItem = {
      ...todoItem,
      completed: !todoItem.completed,
    };
    set((state) => ({
      todoList: state.todoList.map((item) => (item.id === todoItem.id ? newTodoItem : item)),
    }));

    await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem),
    });
  },
  toggleAllTodoItems: () => {
    set((state) => ({
      todoList: state.todoList.map((item) => ({ ...item, completed: !state.todoList.every((todo) => todo.completed) })),
    }));
  },
  setLoading: (loading) => set({ loading }),
  getTodoListFromServer: async () => {
    set({ loading: true });
    await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo")
      .then((res) => res.json())
      .then((data) => {
        set({ todoList: data });
        set({ loading: false });
      });
  },
}));

export default useTodoStore;
