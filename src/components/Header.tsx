import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon, FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { toggleDark, toggleOpenNav } from "../app/features/basicSlice";
import { AppDispatch, RootState } from "../app/store";
import { tClassName } from "./Types";

const navMenus = [
  { text: "home", href: "" },
  { text: "lessons", href: "/lessons" },
  { text: "apps", href: "/apps" },
];

export default function Header() {
  return (
    <>
      <header className="px-3 h-16 lg:px-12 sticky top-0 border-b shadow">
        <div className="flex h-full justify-between items-center gap-4">
          <div>Logo</div>
          <Nav />
          <div className="flex gap-3">
            <DarkMode />
            <SourceCode />
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
}

function NavBtn() {
  const { openNav } = useSelector((state: RootState) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenNav());
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="toggle openNav"
      className={`${openNav ? "rotate-180" : ""} text-xl transition-all duration-150`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
}

function NavContent({ className }: tClassName) {
  return navMenus.map((item, i) => (
    <NavLink key={i} to={item.href} className={`${className} hover:text-cyan-500`}>
      {item.text}
    </NavLink>
  ));
}

function Nav() {
  return (
    <nav className="hidden sm:flex w-full gap-3 capitalize">
      <NavContent />
    </nav>
  );
}

function NavCollapse() {
  const { openNav, dark } = useSelector((state: RootState) => state.basic);
  return (
    <nav
      className={`flex sm:hidden flex-col border-b rounded-b-lg p-3 gap-3 capitalize ${
        openNav ? "scale-y-100" : "scale-y-0"
      } fixed top-16 origin-top w-full transition-all duration-150 ${dark ? "bg-slate-900" : "bg-white"}`}
    >
      <NavContent className="border-b" />
    </nav>
  );
}

function DarkMode() {
  const { dark } = useSelector((state: RootState) => state.basic);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(toggleDark());
  };
  return (
    <button onClick={handleClick} type="button" aria-label="toggle dark mode" className="text-xl w-5 h-5 overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
}

function SourceCode() {
  return (
    <a href="" className="text-xl" title="source code">
      <FaGithub />
    </a>
  );
}
