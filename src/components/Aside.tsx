import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { tClassName } from "./Types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { toggleOpenAside } from "../app/features/basicSlice";
import { usePath } from "./Hooks";
import { NavLink } from "react-router-dom";

const asideAppsMenus = [
  { text: "pedro todo", href: "/apps/pedro-todo" },
  { text: "wds cart", href: "/apps/wds-cart" },
];

const asideLessonsMenus = [
  { text: "lesson1", href: "/lessons/lesson1" },
  { text: "lesson2", href: "/lessons/lesson2" },
];

export function AsideBtn() {
  // const { openAside } = useSelector((state: RootState) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenAside());
  };
  return (
    <button type="button" onClick={handleClick} className="block sm:hidden text-2xl" aria-label="toggle open aside">
      <TbLayoutSidebarRightCollapse />
    </button>
  );
}

export function AsideContent({ className }: tClassName) {
  const { path } = usePath();
  let menus;
  if (path[1] === "lessons") menus = asideLessonsMenus;
  else if (path[1] === "apps") menus = asideAppsMenus;
  return (
    <div className={`${className} flex flex-col gap-3 py-3`}>
      {menus?.map((item, i) => (
        <NavLink key={i} to={item.href} className={`hover:text-cyan-500`}>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}

export function Aside({ className }: tClassName) {
  return (
    <aside className={`${className} hidden sm:block`}>
      <AsideContent />
    </aside>
  );
}

export function AsideCollapse() {
  const { dark, openAside } = useSelector((state: RootState) => state.basic);
  return (
    <aside
      className={`${openAside ? "scale-x-100" : "scale-x-0"} origin-left ${
        dark ? "bg-slate-900" : "bg-white"
      } sm:hidden fixed top-16 bottom-0 left-0 w-2/3 border-r shadow rounded-r-lg transition-all duration-150`}
    >
      <AsideContent className="px-3" />
    </aside>
  );
}
