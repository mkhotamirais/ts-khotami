import React, { useState } from "react";

export default function Lesson2() {
  return (
    <div>
      lesson2
      <Les1 />
      <Les2 />
      <Les3 type="button" color="red" size="md" />
      <Les4 />
      <Les5 />
    </div>
  );
}

// type User = { name: string; age: number };
function Les5() {
  // const [count, setCount] = useState<number>(0) // tipe (number) tidak perlu ditulis
  // const [text, setText] = useState('teks') // begitupun tipe data primitif lainnya
  // beda ceritanya engan objek;
  // const [data, setData] = useState<User | null>(null);
  // const name = data?.name;

  return (
    <div className="border rounded p-2">
      Lesson5: hooks: useState
      {/* <div>name: {name}</div> */}
    </div>
  );
}

function Les4() {
  return (
    <div className="border rounded p-2">
      Lesson4: event handler, tipenya dihover saja <br />
      <button type="button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e)}>
        click me
      </button>
    </div>
  );
}

// intersection & interface
// type tLes3a = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green";
// };
// type tLes3ab = tLes3a & {
//   size: "md" | "lg";
// };
interface tLes3a {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green";
}
interface tLes3ab extends tLes3a {
  size: "md" | "lg";
}
function Les3({ type, color, size }: tLes3ab) {
  return (
    <div className="border rounded p-2">
      Lesson3: intersection and interface extend
      <div>type: {type}</div>
      <div>color: {color}</div>
      <div>size: {size}</div>
    </div>
  );
}

// les 2
type tLes2 = React.ComponentPropsWithoutRef<"button">;
// artinya semua property button menjadi prop
function Les2({ type, autoFocus, ...rest }: tLes2) {
  return (
    <div className="border rounded p-2">
      Lesson2: ComponentPropsWithoutRef & ...rest <br />
      <button type={type} autoFocus={autoFocus} {...rest}>
        Click me
      </button>
    </div>
  );
}

// les 1
function Les1() {
  const [count, setCount] = useState(0);
  return (
    <div className="border rounded p-2">
      Lesson1: useState <br />
      untuk mendapatkan type setCount, hover setCountnya lalu paste untuk tipenya
      <div>count: {count}</div>
      <Les1Btn setCount={setCount}>count +</Les1Btn>
    </div>
  );
}
type tLes1Btn = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};
function Les1Btn({ setCount, children }: tLes1Btn) {
  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      {children}
    </button>
  );
}
