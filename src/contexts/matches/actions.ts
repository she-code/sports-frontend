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
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: MatchListAvilableAction.FETCH_MATCHES_FAILURE,
      payload: "Unable to fetch Matches",
    });
  }
};

export const fetchMatch = async (
  dispatch: MatchesDispatch,
  matchId: number
) => {
  dispatch({ type: MatchListAvilableAction.FETCH_MATCH_REQUESTS });
  try {
    const response = await fetch(`${API_ENDPOINT}/matches/${matchId}`);
    const data = await response.json();
    const match: Match = Object.values(data)[0] as Match;
    console.log({ data, match });
    dispatch({
      type: MatchListAvilableAction.FETCH_MATCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: MatchListAvilableAction.FETCH_MATCH_FAILURE,
      payload: "Unable to fetch Match",
    });
  }
};
