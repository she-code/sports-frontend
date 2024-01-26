import { Reducer } from "react";
import { SportListAvilableAction, SportsState, SportsActions } from "./types";

// Define the initial state
export const initialState: SportsState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  sports: [],
};
export const sportReducer: Reducer<SportsState, SportsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SportListAvilableAction.FETCH_SPORTS_REQUESTS:
      return { ...state, isLoading: true };
    case SportListAvilableAction.FETCH_SPORTS_SUCCESS: {
      return { ...state, isLoading: false, sports: action.payload };
    }
    case SportListAvilableAction.FETCH_SPORTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case SportListAvilableAction.FETCH_SPORT_REQUESTS:
      return { ...state, isLoading: true };
    case SportListAvilableAction.FETCH_SPORT_SUCCESS: {
      return { ...state, isLoading: false, sport: action.payload };
    }
    case SportListAvilableAction.FETCH_SPORT_FAILURE:
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
