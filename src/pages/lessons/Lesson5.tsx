import React, { createContext, useContext, useState } from "react";

type AuthUser = { name: string; email: string };
type AuthUserContext = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
const UserContext = createContext<AuthUserContext | null>(null);
const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
const User = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User must be used");
  }
  const { user, setUser } = context;
  const handleClick = () => {
    setUser({ name: "ahmad", email: "ahmad@gmail.com" });
  };
  const handleClickRemove = () => {
    setUser(null);
  };
  return (
    <div>
      <div>user: {user && user.name}</div>
      <div>email {user && user.email}</div>
      <button type="button" onClick={handleClick} className="border rounded p-1 leading-none">
        set name and email btn
      </button>
      <button type="button" onClick={handleClickRemove} className="border rounded p-1 leading-none">
        remove name and email btn
      </button>
    </div>
  );
};

export default function Lesson5() {
  return (
    <div>
      Lesson5
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}
