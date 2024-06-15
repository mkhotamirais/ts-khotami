// import React from "react";

import React, { useReducer, useState } from "react";

export default function Lesson3() {
  const les2Person = [
    { name: "ahmad", age: 20 },
    { name: "abdul", age: 21 },
  ];

  return (
    <div>
      Lesson3: codevolution
      <div>Les1</div>
      <Les1 nama="ahamd" />
      <div>Les2</div>
      <Les2 person={les2Person} />
      <div>Les3</div>
      <Les3 status="lainnya" />
      <div>Les4</div>
      <Les4>halo semua</Les4>
      <div>Les5: React.ReactNode</div>
      <Les5>
        <div>halo semua</div>
      </Les5>
      <div>Les6: React.MouseEvent & React.ChangeEvent</div>
      <Les6 />
      <div>Les7: React.CSSProperties</div>
      <Les7 style={{ color: "red" }} />
      <div>Les8: useState & type assertion</div>
      <Les8 />
      <div>Les9: useReducer</div>
      <Les9 />
    </div>
  );
}

type PlusMinus = { type: "plus" | "minus" };
type Plus10 = { type: "plus10"; payload: number };
const reducer = (state: { count: number }, action: PlusMinus | Plus10) => {
  if (action.type === "plus") {
    return { count: state.count + 1 };
  } else if (action.type === "minus") {
    return { count: state.count - 1 };
  } else if (action.type === "plus10") {
    return { count: state.count + action.payload };
  } else {
    return state;
  }
};
const initialState = { count: 0 };
export function Les9() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePlus = () => {
    dispatch({ type: "plus" });
  };
  const handleMinus = () => {
    dispatch({ type: "minus" });
  };
  const handlePlus10 = () => {
    dispatch({ type: "plus10", payload: 10 });
  };
  return (
    <div>
      <div>count: {state.count}</div>
      <button type="button" onClick={handlePlus}>
        Plus btn
      </button>
      <button type="button" onClick={handleMinus}>
        Minus btn
      </button>
      <button type="button" onClick={handlePlus10}>
        plus 10 btn
      </button>
    </div>
  );
}

type tPerson2 = { name: string; age: number };
export function Les8() {
  const [person, setPerson] = useState<{ name: string; age: number } | null>(null);
  const [person2, setPerson2] = useState<tPerson2>({} as tPerson2);
  const handleClick = () => {
    setPerson({ name: "ahamd", age: 20 });
  };
  const handleClick2 = () => {
    setPerson2({ name: "ahmad2", age: 22 });
  };
  return (
    <div>
      <div>
        name: {person?.name}, age: {person?.age}
      </div>
      <button type="button" onClick={handleClick}>
        set person btn
      </button>
      <div>
        name2: {person2.name}, age: {person2.age}
      </div>
      <button type="button" onClick={handleClick2}>
        set person2 btn
      </button>
    </div>
  );
}
export function Les7({ style }: { style: React.CSSProperties }) {
  return <div style={style}>style me</div>;
}
export function Les6() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button onClick={handleClick} type="button" className="border rounded leading-none p-1" aria-label="btn">
        Click Me
      </button>
      <input type="text" onChange={handleChange} placeholder="nama" className="border rounded" />
    </div>
  );
}
export function Les5({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
export function Les4({ children }: { children: string }) {
  return <div>Children {children}</div>;
}
export function Les3({ status }: { status: string }) {
  return (
    <div>
      status {status === "loading" ? <div>Loading</div> : status === "success" ? <div>success</div> : <div>error</div>}
    </div>
  );
}
type tLes2 = { person: { name: string; age: number }[] };
export function Les2({ person }: tLes2) {
  return person.map((item, i) => (
    <div key={i}>
      {item.name} - {item.age}
    </div>
  ));
}
export function Les1(props: { nama?: string }) {
  return <div>name: {props.nama}</div>;
}
