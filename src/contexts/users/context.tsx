import React, { createContext, useReducer } from "react";
import { userReducer, initialState } from "./reducer";
import { UsersState, UsersDispatch } from "./types";
export const UsersStateContext = createContext<UsersState>(initialState);
export const UsersDispatchContext = createContext<UsersDispatch>(() => {});
export const UsersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};
