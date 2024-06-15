import { Outlet } from "react-router-dom";
import { Title } from "../../components/Components";

export default function Apps() {
  return (
    <div>
      <Title>Apps</Title>
      <Outlet />
    </div>
  );
}
