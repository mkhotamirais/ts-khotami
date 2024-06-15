import { AsideBtn } from "./Aside";
import { tChildren } from "./Types";

export function Title({ children }: tChildren) {
  return (
    <h1 className="flex items-center gap-2 my-2 text-xl">
      <AsideBtn />
      {children}
    </h1>
  );
}
