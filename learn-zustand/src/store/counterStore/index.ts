import { create } from "zustand";

type CounterState = {
  count: number;
};
type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

const initialCounterState: CounterState = {
  count: 0,
};

// Create your store, which includes both state and (optionally) actions
const useCounterStore = create<CounterState & CounterActions>((set) => ({
  ...initialCounterState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
