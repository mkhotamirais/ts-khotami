import React from "react";

export default function Lesson1() {
  return (
    <div>
      Lesson1
      <Les1 />
      <Les2 name="john" />
      <Les3 id={1} name="doe" />
      <Les4 id={2} />
      <Les5 union="str" arr={[1, 2, 3]} arrUnion={[1, "str"]} tupple={["str", 1]} />
      <Les6a style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les6b style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les7 style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les8 onClick={() => console.log("hello les 8")} />
      <Les9>children content</Les9>{" "}
    </div>
  );
}

type tLes9 = { children: React.ReactNode };
function Les9({ children }: tLes9) {
  return (
    <div className="border rounded p-2">
      Lesson9: children: React.ReactNode <br />
      children: JSX.Element, children harus jsx element, tidak bisa yang lain <br />
      <button type="button">{children}</button>
    </div>
  );
}
type tLes8 = { onClick: () => void };
function Les8({ onClick }: tLes8) {
  return (
    <div className="border rounded p-2">
      Lesson8: onCLick void <br />
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}
type tLes7 = { style: Record<string, string> };
function Les7({ style }: tLes7) {
  return (
    <div className="border rounded p-2">
      Lesson7: Record
      <div style={style}>style me</div>
    </div>
  );
}
type tLes6b = { style: React.CSSProperties };
function Les6b({ style }: tLes6b) {
  return (
    <div className="border rounded p-2">
      Lesson6a: React.CSSProperties
      <div style={style}>style me</div>
    </div>
  );
}
type tLes6a = { style: { border: string; margin: string; padding: string; backgroundColor: string } };
function Les6a({ style }: tLes6a) {
  return (
    <div className="border rounded p-2">
      Lesson6a: object inside object type
      <div style={style}>style me</div>
    </div>
  );
}
type tLes5 = { union: string | number; arr: number[]; arrUnion: (number | string)[]; tupple: [string, number] };
function Les5({ union, arr, arrUnion, tupple }: tLes5) {
  return (
    <div className="border rounded p-2">
      Lesson5: union, array, array union, tupple
      <div>
        <div>union: {union}</div>
        <div>arr: {arr}</div>
        <div>arrUnion: {arrUnion}</div>
        <div>tupple: {tupple}</div>
      </div>
    </div>
  );
}
type tLes4 = { id: number; name?: string };
function Les4({ id, name = "ahamd" }: tLes4) {
  return (
    <div className="border rounded p-2">
      Lesson4: type aliases, optional ( ? ), default value<div>id: {id}</div>
      <div>name: {name}</div>
    </div>
  );
}
function Les3({ id, name }: { id: number; name: string }) {
  return (
    <div className="border rounded p-2">
      Lesson3: props2
      <div>id: {id}</div>
      <div>name: {name}</div>
    </div>
  );
}
function Les2(props: { name: string }) {
  const { name } = props;
  return (
    <div className="border rounded p-2">
      Lesson2: props
      <div>name: {name}</div>
    </div>
  );
}
const Les1: React.FC = () => <div className="border rounded p-2">Lesson1</div>;
