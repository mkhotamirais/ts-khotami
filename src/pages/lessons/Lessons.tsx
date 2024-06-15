import { Outlet } from "react-router-dom";
import { Title } from "../../components/Components";

export default function Lessons() {
  return (
    <div>
      <Title>Lessons</Title>
      <Outlet />
    </div>
  );
}
