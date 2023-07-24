import { useContext } from "react";
import {
  UsersStateContext,
  UsersDispatchContext,
} from "../contexts/users/context";

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);
