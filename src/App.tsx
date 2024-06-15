import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { RootState } from "./app/store";
import { removeOpenNav } from "./app/features/basicSlice";

export default function App() {
  const { dark, openNav } = useSelector((state: RootState) => state.basic);
  const dispatch = useDispatch();
  const handleMain = () => {
    if (openNav) dispatch(removeOpenNav());
  };
  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-slate-700`}>
      <Header />
      <main onClick={handleMain} className="px-3 lg:px-12 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
