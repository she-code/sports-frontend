import { API_ENDPOINT } from "../../config/constants";

import { Match, MatchListAvilableAction, MatchesDispatch } from "./types";

export const fetchMatches = async (dispatch: MatchesDispatch) => {
  dispatch({ type: MatchListAvilableAction.FETCH_MATCHES_REQUESTS });
  try {
    const response = await fetch(`${API_ENDPOINT}/matches`);
    const data = await response.json();
    const matches: Match[] = Object.values(data)[0] as Match[];
    dispatch({
      type: MatchListAvilableAction.FETCH_MATCHES_SUCCESS,
      payload: matches,
    });
    console.log(matches, "action");
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: MatchListAvilableAction.FETCH_MATCHES_FAILURE,
      payload: "Unable to fetch Matches",
    });
  }
};
