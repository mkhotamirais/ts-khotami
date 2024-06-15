import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { RootState } from "./app/store";
import { removeOpenAside, removeOpenNav } from "./app/features/basicSlice";
import { usePath } from "./components/Hooks";
import { Aside, AsideCollapse } from "./components/Aside";

export default function App() {
  const { dark, openNav, openAside } = useSelector((state: RootState) => state.basic);
  const { path } = usePath();
  const dispatch = useDispatch();
  const handleMain = () => {
    if (openNav) dispatch(removeOpenNav());
    if (openAside) dispatch(removeOpenAside());
  };
  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-slate-700`}>
      <Header />
      {!path[1] || path[1] === "" || path[1] === "home" ? (
        <main onClick={handleMain} className="px-3 lg:px-12 min-h-screen">
          <Outlet />
        </main>
      ) : (
        <main onClick={handleMain} className="px-3 lg:px-12 min-h-screen grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5">
          <AsideCollapse />
          <Aside className="col-span-1" />
          <div className="sm:col-span-3 lg:col-span-4">
            <Outlet />
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}
