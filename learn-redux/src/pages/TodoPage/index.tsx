import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import the useSelector function from react-redux
import TodoList from "./TodoList";
import { ITodoItem } from "../../types/todoTypes";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import todoActions from "../../store/todoStore/todoAction";
import todoThunk from "../../store/todoStore/todoThunk";

const TodoPage = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch(); // Call the useDispatch function
  const { todoItem, action } = useSelector((state: any) => state.todoStore); // Call the useSelector function
  const handleSave = () => {
    if (!todoItem.title) {
      toast.warning("Please enter a todo!");
      return;
    }
    if (action === "create") {
      const newTodoItem: ITodoItem = {
        ...todoItem,
        id: uuidv4(),
        completed: false,
      };
      dispatch<any>(todoThunk.addNewTodoItem(newTodoItem));
    } else {
      dispatch<any>(todoThunk.updateTodoItem(todoItem));
    }
    titleRef.current?.focus();
    dispatch(todoActions.setAction("create"));
    dispatch(todoActions.setTodoItem({ id: "", title: "", completed: false }));
  };
  useEffect(() => {
    action === "update" && titleRef.current?.focus();
  }, [action, todoItem.id]);
  useEffect(() => {
    dispatch<any>(todoThunk.fetchTodoFromServer());
  }, []);
  return (
    <div className='h-[600px] max-w-[1000px] w-[100%] shadow-xl bg-gradient-to-br from-violet-200 to-pink-200 rounded-2xl p-3 text-left'>
      <div className=''>
        <input
          value={todoItem?.title}
          ref={titleRef}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onChange={(e) => dispatch(todoActions.setTodoItem({ ...todoItem, title: e.target.value }))}
          className='p-2 w-[300px] focus-visible:outline-none mr-2 focus-within:ring-0 focus-visible:border-[1px] focus:border-gray-400 focus:border-0 focus-within:border-0 focus-visible:ring-0 border-[1px] focus:ring-0 rounded-md bg-gray-100 disabled:bg-slate-900 text-gray-600'
          placeholder='Enter your todo ...'
        />
        <button onClick={handleSave} className='hover:bg-gray-300 focus:ring-0 select-none bg-gray-200 text-gray-600'>
          {action === "create" ? "Create" : "Save"}
        </button>
      </div>
      <div className='w-full mt-3'>
        <TodoList />
      </div>
    </div>
  );
};
export default memo(TodoPage);
