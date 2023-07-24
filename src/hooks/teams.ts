import { useContext } from "react";
import {
  TeamsStateContext,
  TeamsDispatchContext,
} from "../contexts/teams/context";

export const useTeamsState = () => useContext(TeamsStateContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);
