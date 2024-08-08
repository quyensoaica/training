import { ITodoItem, TodoActionTypes } from "../../types/todoTypes";

const setTodoItem = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.SET_TODO_ITEM,
    payload: todoItem,
  };
};
const addTodoItem = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.ADD_TODO_ITEM,
    payload: todoItem,
  };
};
const setAction = (action: "create" | "update") => {
  return {
    type: TodoActionTypes.SET_ACTION,
    payload: action,
  };
};
const updateTodoItem = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.UPDATE_TODO_ITEM,
    payload: todoItem,
  };
};
const deleteTodoItem = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.DELETE_TODO_ITEM,
    payload: todoItem,
  };
};
const toggleTodoItem = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_ITEM,
    payload: todoItem,
  };
};
const toggleAllTodoItems = () => {
  return {
    type: TodoActionTypes.TOGGLE_ALL_TODO_ITEMS,
  };
};
const getTodoListFromServer = (todoList: ITodoItem[]) => {
  return {
    type: TodoActionTypes.GET_TODO_LIST_FROM_SERVER,
    payload: todoList,
  };
};

const fetchTodoStart = () => {
  return {
    type: TodoActionTypes.FETCH_TODO_START,
    payload: null,
  };
};
const fetchTodoSuccess = (todoList: ITodoItem[]) => {
  return {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: todoList,
  };
};
const fetchTodoFailure = (error: string) => {
  return {
    type: TodoActionTypes.FETCH_TODO_FAILURE,
    payload: error,
  };
};
const addTodoStart = () => {
  return {
    type: TodoActionTypes.ADD_TODO_START,
    payload: null,
  };
};
const addTodoSuccess = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.ADD_TODO_SUCCESS,
    payload: todoItem,
  };
};
const addTodoFailure = (error: string) => {
  return {
    type: TodoActionTypes.ADD_TODO_FAILURE,
    payload: error,
  };
};
const updateTodoStart = () => {
  return {
    type: TodoActionTypes.UPDATE_TODO_START,
    payload: null,
  };
};
const updateTodoSuccess = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.UPDATE_TODO_SUCCESS,
    payload: todoItem,
  };
};
const updateTodoFailure = (error: string) => {
  return {
    type: TodoActionTypes.UPDATE_TODO_FAILURE,
    payload: error,
  };
};
const deleteTodoStart = () => {
  return {
    type: TodoActionTypes.DELETE_TODO_START,
    payload: null,
  };
};
const deleteTodoSuccess = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.DELETE_TODO_SUCCESS,
    payload: todoItem,
  };
};
const deleteTodoFailure = (error: string) => {
  return {
    type: TodoActionTypes.DELETE_TODO_FAILURE,
    payload: error,
  };
};
const toggleTodoStart = () => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_START,
    payload: null,
  };
};
const toggleTodoSuccess = (todoItem: ITodoItem) => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_SUCCESS,
    payload: todoItem,
  };
};
const toggleTodoFailure = (error: string) => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_FAILURE,
    payload: error,
  };
};
const toggleAllStart = () => {
  return {
    type: TodoActionTypes.TOGGLE_ALL_START,
    payload: null,
  };
};
const toggleAllSuccess = () => {
  return {
    type: TodoActionTypes.TOGGLE_ALL_SUCCESS,
    payload: null,
  };
};
const toggleAllFailure = (error: string) => {
  return {
    type: TodoActionTypes.TOGGLE_ALL_FAILURE,
    payload: error,
  };
};

const todoActions = {
  setTodoItem,
  addTodoItem,
  setAction,
  updateTodoItem,
  deleteTodoItem,
  toggleTodoItem,
  toggleAllTodoItems,
  getTodoListFromServer,

  fetchTodoStart,
  fetchTodoSuccess,
  fetchTodoFailure,

  addTodoStart,
  addTodoSuccess,
  addTodoFailure,

  updateTodoStart,
  updateTodoSuccess,
  updateTodoFailure,

  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,

  toggleTodoStart,
  toggleTodoSuccess,
  toggleTodoFailure,

  toggleAllStart,
  toggleAllSuccess,
  toggleAllFailure,
};
export default todoActions;
