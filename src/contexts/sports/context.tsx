import React, { createContext, useReducer } from "react";
import { sportReducer, initialState } from "./reducer";
import { SportsState, SportsDispatch } from "./types";
export const SportsStateContext = createContext<SportsState>(initialState);
export const SportsDispatchContext = createContext<SportsDispatch>(() => {});
export const SportsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(sportReducer, initialState);
  return (
    <SportsStateContext.Provider value={state}>
      <SportsDispatchContext.Provider value={dispatch}>
        {children}
      </SportsDispatchContext.Provider>
    </SportsStateContext.Provider>
  );
};
