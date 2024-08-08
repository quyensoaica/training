import { ITodoItem, TodoActionTypes } from "../../types/todoTypes";

interface TodoState {
  todoList: ITodoItem[];
  todoItem: ITodoItem;
  action: string;
  isLoading?: boolean;
  error?: string;
}

const initialState: TodoState = {
  todoList: [],
  todoItem: {
    id: "",
    title: "",
    completed: false,
  },
  action: "create",
  isLoading: false,
  error: "",
};

interface TodoAction {
  type: string;
  payload: any;
}

const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    // before use redux thunk
    case TodoActionTypes.SET_TODO_ITEM:
      return { ...state, todoItem: action.payload };
    case TodoActionTypes.ADD_TODO_ITEM:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case TodoActionTypes.SET_ACTION:
      return { ...state, action: action.payload };
    case TodoActionTypes.UPDATE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case TodoActionTypes.DELETE_TODO_ITEM:
      return { ...state, todoList: state.todoList.filter((item) => item.id !== action.payload.id) };
    case TodoActionTypes.TOGGLE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item)),
      };
    case TodoActionTypes.TOGGLE_ALL_TODO_ITEMS:
      return {
        ...state,
        todoList: state.todoList.map((item) => ({ ...item, completed: !state.todoList.every((item) => item.completed) })),
      };
    case TodoActionTypes.GET_TODO_LIST_FROM_SERVER:
      return { ...state, todoList: action.payload };
    case TodoActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    // after use redux thunk
    case TodoActionTypes.FETCH_TODO_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
      };
    case TodoActionTypes.FETCH_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TodoActionTypes.ADD_TODO_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, action.payload],
      };
    case TodoActionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TodoActionTypes.UPDATE_TODO_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: state.todoList.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case TodoActionTypes.UPDATE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TodoActionTypes.DELETE_TODO_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: state.todoList.filter((item) => item.id !== action.payload.id),
      };
    case TodoActionTypes.DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TodoActionTypes.TOGGLE_TODO_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: state.todoList.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item)),
      };
    case TodoActionTypes.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TodoActionTypes.TOGGLE_ALL_START:
      return { ...state, isLoading: true };
    case TodoActionTypes.TOGGLE_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: state.todoList.map((item) => ({ ...item, completed: !state.todoList.every((item) => item.completed) })),
      };
    case TodoActionTypes.TOGGLE_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { todoReducer };
