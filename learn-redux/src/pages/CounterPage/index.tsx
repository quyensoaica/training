import reactLogo from "/src/assets/react.svg";
import viteLogo from "/src/assets/vite.svg";
import useCounterStore from "../../store/counterStore";

function CounterPage() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className='text-center'>
      <div className='flex justify-center items-center'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <div className='mt-3'>
        <h1 className='m-3'>{count}</h1>
        <div className='flex gap-3 justify-center mt-10'>
          <button onClick={decrement} className='hover:bg-gray-800 focus:ring-0'>
            -
          </button>
          <button onClick={increment} className='hover:bg-gray-800 focus:ring-0'>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
