import { produce } from "immer";
import { create } from "zustand";

const useStore = create((set) => ({
  nested: { count: 0 },
  inc: () => set((state) => ({ nested: { ...state.nested, count: state.nested.count + 1 } })),
  inc2: () =>
    set(
      produce((state) => {
        ++state.nested.count;
      })
    ),
}));
export default function Lesson8() {
  const { nested, inc, inc2 } = useStore();
  return (
    <div>
      Lesson8
      <div>count: {nested.count}</div>
      <button onClick={inc}>inc</button>
      <button onClick={inc2}>inc2</button>
    </div>
  );
}
