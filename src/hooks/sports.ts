import { useContext } from "react";
import {
  SportsStateContext,
  SportsDispatchContext,
} from "../contexts/sports/context";

export const useSportsState = () => useContext(SportsStateContext);
export const useSportsDispatch = () => useContext(SportsDispatchContext);
