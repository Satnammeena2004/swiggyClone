import {createContext} from "react";

const UserContext = createContext({
  user: {name: "", email: ""},
});

UserContext.displayName = "User-Context"
export default UserContext;
