import React, { createContext, useReducer } from "react";
import { matchReducer, initialState } from "./reducer";
import { MatchesState, MatchesDispatch } from "./types";
export const MatchesStateContext = createContext<MatchesState>(initialState);
export const MatchesDispatchContext = createContext<MatchesDispatch>(() => {});
export const MatchesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(matchReducer, initialState);
  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispatch}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};
