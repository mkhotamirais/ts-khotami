import { Component, useEffect, useRef, useState } from "react";

export default function Lesson6() {
  return (
    <div>
      Lesson6
      <div>Lesson1: useRef & useEffect !</div>
      <Les1 />
      <div>Lesson2: useRef lanjut</div>
      <Les2 />
      <div>Lesson3: class</div>
      <Les3 message="hello" />
      <div>Lesson4: HOF</div>
      <Les4 showLes4cb={true} Component={Les4Cb} />
      <div>Lesson4b: HOF2</div>
      <Les4b show={true} component={Les4bCb} />
      <div>Lesson5: generic</div>
      <Les5 items={["ahmad", "abdul", "siti"]} onClick={(item) => console.log(item)} />
      <Les5 items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <div>Lesson6: never</div>
      <Les6 value={5} isPositive />
      <div>Lesson7: template literal and exclude</div>
      <Les7 pos="left-center" />
    </div>
  );
}

// Position prop can be on of:
// "left-center", "left-top", "left-bottom"
// "right-center", "right-top", "right-bottom"
// "center", "center-top", "center-bottom"
type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";
type tLes7 = { pos: `${Horizontal}-${Vertical}` };
function Les7({ pos }: tLes7) {
  return <div>position: {pos}</div>;
}

// type tLes6 = {value: number; isPositive?:boolean; isNegative?:boolean; isZero?:boolean}
type Random = { value: number };
type Positive = Random & { isPositive: boolean; isNegative?: never; isZero?: never };
type Negative = Random & { isPositive?: never; isNegative: boolean; isZero?: never };
type Zero = Random & { isPositive?: never; isNegative?: never; isZero: boolean };
type tLes6 = Positive | Negative | Zero;
function Les6({ value, isPositive, isNegative, isZero }: tLes6) {
  return (
    <div>
      {value} - {isPositive && "positive"}
      {isNegative && "negative"} {isZero && "zero"}
    </div>
  );
}

type tLes5<T> = { items: T[]; onClick(value: T): void };
const Les5 = <T extends string | number>({ items, onClick }: tLes5<T>) => {
  return (
    <div>
      {items?.map((item, i) => (
        <div key={i} onClick={() => onClick(item)} className="cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

type tLes4bCb = { nama: string };
function Les4bCb({ nama }: tLes4bCb) {
  return <div>les4bCb hello {nama}</div>;
}
function Les4b({ show, component: Component }: { show: boolean; component: React.ComponentType<tLes4bCb> }) {
  if (show) {
    return <Component nama="ahmad" />;
  } else {
    return <div>componen is not showed</div>;
  }
}
function Les4Cb() {
  return <div>lef4Cb</div>;
}
function Les4({ showLes4cb, Component }: { showLes4cb: boolean; Component: React.ComponentType }) {
  if (showLes4cb) {
    return <Component />;
  } else {
    return <div>not showing les4cb</div>;
  }
}
class Les3 extends Component<{ message: string }, { count: number }> {
  // class Les3 extends Component<{}, { count: number }> { // tulis {} kalau tidak ada props
  // class Les3 extends Component<{ message: string }> { // hilangkan count kalau tidak ada state
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div>
        {this.props.message} - {this.state.count}
        <br />
        <button type="button" onClick={this.handleClick}>
          increment btn
        </button>
      </div>
    );
  }
}
function Les2() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -{" "}
      <button type="button" onClick={() => stopTimer()}>
        Stop Timer
      </button>
    </div>
  );
}
function Les1() {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="input me" className="border rounded" />
    </div>
  );
}
