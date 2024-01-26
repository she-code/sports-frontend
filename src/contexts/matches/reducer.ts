import { Reducer } from "react";
import { MatchListAvilableAction, MatchesState, MatchActions } from "./types";

// Define the initial state
export const initialState: MatchesState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  matches: [],
};
export const matchReducer: Reducer<MatchesState, MatchActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case MatchListAvilableAction.FETCH_MATCHES_REQUESTS:
      return { ...state, isLoading: true };
    case MatchListAvilableAction.FETCH_MATCHES_SUCCESS: {
      return { ...state, isLoading: false, matches: action.payload };
    }
    case MatchListAvilableAction.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case MatchListAvilableAction.FETCH_MATCH_REQUESTS:
      return { ...state, isLoading: true };
    case MatchListAvilableAction.FETCH_MATCH_SUCCESS: {
      return { ...state, isLoading: false, match: action.payload };
    }
    case MatchListAvilableAction.FETCH_MATCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case MatchListAvilableAction.CLEAR_MATCH: {
      return { ...state, match: undefined };
    }
    default:
      return state;
  }
};
