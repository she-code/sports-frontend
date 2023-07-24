import { API_ENDPOINT } from "../../config/constants";

import { Sport, SportListAvilableAction, SportsDispatch } from "./types";

export const fetchSports = async (dispatch: SportsDispatch) => {
  dispatch({ type: SportListAvilableAction.FETCH_SPORTS_REQUESTS });
  try {
    const response = await fetch(`${API_ENDPOINT}/sports`);
    const data = await response.json();
    const sports: Sport[] = Object.values(data)[0] as Sport[];
    dispatch({
      type: SportListAvilableAction.FETCH_SPORTS_SUCCESS,
      payload: sports,
    });
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: SportListAvilableAction.FETCH_SPORTS_FAILURE,
      payload: "Unable to fetch sports",
    });
  }
};
