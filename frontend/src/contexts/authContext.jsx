import { createContext } from "react";

const authContext = createContext({
  authUser: null,
  setAuthUser: () => {},
});

export default authContext;