import { Dispatch } from "redux";
import todoActions from "./todoAction";
import { toast } from "react-toastify";
import { ITodoItem } from "../../types/todoTypes";

const fetchTodoFromServer = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.fetchTodoStart());
      const response = await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo");
      const data = await response.json();
      dispatch(todoActions.fetchTodoSuccess(data));
    } catch (error: any) {
      dispatch(todoActions.fetchTodoFailure(error));
      toast.error("Failed to fetch todo list from server!");
    }
  };
};

const addNewTodoItem = (todoItem: ITodoItem) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.addTodoStart());
      const response = await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoItem),
      });
      const data = await response.json();
      dispatch(todoActions.addTodoSuccess(data));
      toast.success("Todo added successfully!");
    } catch (error: any) {
      dispatch(todoActions.addTodoFailure(error));
      toast.error("Failed to add todo item!");
    }
  };
};

const updateTodoItem = (todoItem: ITodoItem) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.updateTodoStart());
      const response = await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoItem),
      });
      const data = await response.json();
      dispatch(todoActions.updateTodoSuccess(data));
      toast.success("Todo updated successfully!");
    } catch (error: any) {
      dispatch(todoActions.updateTodoFailure(error));
      toast.error("Failed to update todo item!");
    }
  };
};

const deleteTodoItem = (todoItem: ITodoItem) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.deleteTodoStart());
      await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
        method: "DELETE",
      });
      dispatch(todoActions.deleteTodoSuccess(todoItem));
      toast.success("Todo deleted successfully!");
    } catch (error: any) {
      dispatch(todoActions.deleteTodoFailure(error));
      toast.error("Failed to delete todo item!");
    }
  };
};

const toggleTodoItem = (todoItem: ITodoItem) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.toggleTodoStart());
      const response = await fetch(`https://66b049b36a693a95b53843dc.mockapi.io/list-todo/${todoItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...todoItem, completed: !todoItem.completed }),
      });
      const data = await response.json();
      dispatch(todoActions.toggleTodoSuccess(data));
      if (!todoItem.completed) {
        toast.success("Todo marked as completed!");
      } else {
        toast.success("Todo marked as incomplete!");
      }
    } catch (error: any) {
      dispatch(todoActions.toggleTodoFailure(error));
      toast.error("Failed to toggle todo item!");
    }
  };
};

const toggleAllTodoItems = (todoList: ITodoItem[]) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(todoActions.toggleAllStart());
      await fetch("https://66b049b36a693a95b53843dc.mockapi.io/list-todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoList.map((item) => ({ ...item, completed: !todoList.every((item) => item.completed) }))),
      });
      dispatch(todoActions.toggleAllSuccess());
      toast.success("All todos toggled successfully!");
    } catch (error: any) {
      dispatch(todoActions.toggleAllFailure(error));
      toast.error("Failed to toggle all todos!");
    }
  };
};

const todoThunk = {
  fetchTodoFromServer,
  addNewTodoItem,
  updateTodoItem,
  deleteTodoItem,
  toggleTodoItem,
  toggleAllTodoItems,
};
export default todoThunk;
