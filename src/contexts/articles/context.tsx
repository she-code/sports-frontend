import React, { createContext, useReducer } from "react";
import { articleReducer, initialState } from "./reducer";
import { ArticlesState, ArticlesDispatch } from "./types";
export const ArticlesStateContext = createContext<ArticlesState>(initialState);
export const ArticlesDispatchContext = createContext<ArticlesDispatch>(
  () => {}
);
export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);
  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};
