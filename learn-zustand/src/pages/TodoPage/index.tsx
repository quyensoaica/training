import { useEffect, useRef } from "react";
import useTodoStore from "../../store/todoStore";
import TodoList from "./TodoList";
import { ITodoItem } from "../../types/todoTypes";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const TodoPage = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const { todoItem, todoList, addTodoItem, setTodoItem, action, updateTodoItem, getTodoListFromServer } = useTodoStore();
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
      addTodoItem(newTodoItem);
      toast.success("Todo added successfully!");
    } else {
      updateTodoItem(todoItem);
      toast.success("Todo updated successfully!");
    }
    titleRef.current?.focus();
    setTodoItem({ id: "", title: "", completed: false });
  };
  useEffect(() => {
    action === "update" && titleRef.current?.focus();
  }, [action, todoItem.id]);
  useEffect(() => {
    getTodoListFromServer();
  }, []);
  return (
    <div className='h-[600px] max-w-[1000px] w-[100%] shadow-xl bg-gradient-to-br from-violet-200 to-pink-200 rounded-2xl p-3 text-left'>
      <div className=''>
        <input
          value={todoItem?.title}
          ref={titleRef}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
          className='p-2 w-[300px] focus-visible:outline-none mr-2 focus-within:ring-0 focus-visible:border-[1px] focus:border-gray-400 focus:border-0 focus-within:border-0 focus-visible:ring-0 border-[1px] focus:ring-0 rounded-md bg-gray-100 disabled:bg-slate-900 text-gray-600'
          placeholder='Enter your todo ...'
        />
        <button onClick={handleSave} className='hover:bg-gray-300 focus:ring-0 select-none bg-gray-200 text-gray-600'>
          {action === "create" ? "Create" : "Save"}
        </button>
      </div>
      <div className='w-full mt-3'>
        <TodoList todos={todoList} />
      </div>
    </div>
  );
};
export default TodoPage;
