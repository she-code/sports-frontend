import { Reducer } from "react";
import { TeamListAvilableAction, TeamsState, TeamsActions } from "./types";

// Define the initial state
export const initialState: TeamsState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  teams: [],
};
export const teamReducer: Reducer<TeamsState, TeamsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TeamListAvilableAction.FETCH_TEAMS_REQUESTS:
      return { ...state, isLoading: true };
    case TeamListAvilableAction.FETCH_TEAMS_SUCCESS: {
      return { ...state, isLoading: false, teams: action.payload };
    }
    case TeamListAvilableAction.FETCH_TEAMS_FAILURE:
      console.log(action.payload, "payload team");
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case TeamListAvilableAction.FETCH_TEAM_REQUESTS:
      return { ...state, isLoading: true };
    case TeamListAvilableAction.FETCH_TEAM_SUCCESS: {
      return { ...state, isLoading: false, sport: action.payload };
    }
    case TeamListAvilableAction.FETCH_TEAM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
