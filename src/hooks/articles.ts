import { useContext } from "react";
import {
  ArticlesStateContext,
  ArticlesDispatchContext,
} from "../contexts/articles/context";

export const useArticlesState = () => useContext(ArticlesStateContext);
export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);
