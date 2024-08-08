import { ITodoItem } from "../../types/todoTypes";
import { useDispatch } from "react-redux";
import todoActions from "../../store/todoStore/todoAction";
import todoThunk from "../../store/todoStore/todoThunk";

interface ITodoItemProps {
  todo: ITodoItem;
}
const TodoItem = ({ todo }: ITodoItemProps) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(todoActions.setTodoItem(todo));
    dispatch(todoActions.setAction("update"));
  };
  const handleDelete = () => {
    const check = confirm("Are you sure you want to delete this todo?");
    if (check) {
      dispatch<any>(todoThunk.deleteTodoItem(todo));
    }
  };
  const handleToggleCompleted = () => {
    dispatch<any>(todoThunk.toggleTodoItem(todo));
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
