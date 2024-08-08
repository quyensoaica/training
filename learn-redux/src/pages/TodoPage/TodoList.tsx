import { memo, useEffect, useState } from "react";
import { ITodoItem } from "../../types/todoTypes";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/todoStore/todoReducer";

const TodoList = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: any) => state.todo);
  const handleCheckAll = () => {
    setIsCheckAll(!isCheckAll);
    dispatch<any>(todoAction.toggleAllTodoItems());
  };
  useEffect(() => {
    const check = todoList.every((todo: ITodoItem) => todo.completed);
    setIsCheckAll(check);
  }, [todoList]);
  return (
    <div className=' shadow-md sm:rounded-lg'>
      <div className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 flex h-[50px] items-center font-medium'>
        <div className='w-[100px] text-center'>
          <input
            id='checkbox-all-search'
            checked={isCheckAll}
            onChange={handleCheckAll}
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
        </div>
        <div className='flex-1'>
          <span>Todo</span>
        </div>
        <div className='w-[100px]'>
          <span>Action</span>
        </div>
      </div>
      <div
        className='overflow-y-scroll h-[450px] [&::-webkit-scrollbar]:[width:4px]
            [&::-webkit-scrollbar-thumb]:bg-purple-300 '
      >
        {todoList.map((todo: ITodoItem) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
export default memo(TodoList);
