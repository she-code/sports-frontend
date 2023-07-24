import { useContext } from "react";
import {
  MatchesStateContext,
  MatchesDispatchContext,
} from "../contexts/matches/context";

export const useMatchesState = () => useContext(MatchesStateContext);
export const useMatchesDispatch = () => useContext(MatchesDispatchContext);
