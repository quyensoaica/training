import { toast } from "react-toastify";
import useTodoStore from "../../store/todoStore";
import { ITodoItem } from "../../types/todoTypes";

interface ITodoItemProps {
  todo: ITodoItem;
}
const TodoItem = ({ todo }: ITodoItemProps) => {
  const { setTodoItem, setAction, deleteTodoItem, toggleTodoItem } = useTodoStore();
  const handleUpdate = () => {
    setTodoItem(todo);
    setAction("update");
  };
  const handleDelete = () => {
    const check = confirm("Are you sure you want to delete this todo?");
    if (check) {
      deleteTodoItem(todo);
      toast.success("Todo deleted successfully!");
    }
  };
  const handleToggleCompleted = () => {
    toggleTodoItem(todo);
    if (!todo.completed) {
      toast.success("Todo marked as completed!");
    } else {
      toast.success("Todo marked as incomplete!");
    }
  };
  return (
    <div className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex h-[45px] items-center font-medium'>
      <div className='w-[100px] text-center'>
        <input
          id='checkbox-all-search'
          checked={todo.completed}
          onChange={handleToggleCompleted}
          type='checkbox'
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
      </div>
      <div className='flex-1'>
        <span>{todo.title}</span>
      </div>
      <div className='w-[150px]'>
        <div className='flex gap-3 justify-center'>
          <span onClick={handleUpdate} className='cursor-pointer hover:bg-gray-200 w-[25px] h-[25px] rounded-md flex justify-center items-center'>
            <img src='src/assets/edit.svg' className='w-[12px] h-[12px]' />
          </span>
          <span onClick={handleDelete} className='cursor-pointer hover:bg-gray-200 w-[25px] h-[25px] rounded-md flex justify-center items-center'>
            <img src='src/assets/delete.svg' className='w-[12px] h-[12px]' />
          </span>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
