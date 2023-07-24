import { API_ENDPOINT } from "../../config/constants";

import { TeamListAvilableAction, TeamsDispatch } from "./types";

export const fetchTeams = async (dispatch: TeamsDispatch) => {
  dispatch({ type: TeamListAvilableAction.FETCH_TEAMS_REQUESTS });
  try {
    const response = await fetch(`${API_ENDPOINT}/teams`);
    const data = await response.json();
    dispatch({
      type: TeamListAvilableAction.FETCH_TEAMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: TeamListAvilableAction.FETCH_TEAMS_FAILURE,
      payload: "Unable to fetch teams",
    });
  }
};
