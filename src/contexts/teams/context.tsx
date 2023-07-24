import React, { createContext, useReducer } from "react";
import { teamReducer, initialState } from "./reducer";
import { TeamsState, TeamsDispatch } from "./types";
export const TeamsStateContext = createContext<TeamsState>(initialState);
export const TeamsDispatchContext = createContext<TeamsDispatch>(() => {});
export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);
  return (
    <TeamsStateContext.Provider value={state}>
      <TeamsDispatchContext.Provider value={dispatch}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsStateContext.Provider>
  );
};
