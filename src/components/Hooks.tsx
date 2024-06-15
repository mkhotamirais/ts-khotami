import { useLocation } from "react-router-dom";

export function usePath() {
  const location = useLocation();
  const path = location.pathname.split("/");
  return { path };
}
