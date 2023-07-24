export type TeamsState = {
  teams: Team[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  team?: Team;
};
export enum TeamListAvilableAction {
  FETCH_TEAMS_REQUESTS = "FETCH_TEAMS_REQUESTS",
  FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS",
  FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE",
  FETCH_TEAM_REQUESTS = "FETCH_TEAM_REQUESTS",
  FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS",
  FETCH_TEAM_FAILURE = "FETCH_TEAM_FAILURE",
}

export type TeamsActions =
  | {
      type: TeamListAvilableAction.FETCH_TEAMS_REQUESTS;
    }
  | {
      type: TeamListAvilableAction.FETCH_TEAMS_SUCCESS;
      payload: Team[];
    }
  | { type: TeamListAvilableAction.FETCH_TEAMS_FAILURE; payload: string }
  | { type: TeamListAvilableAction.FETCH_TEAM_REQUESTS }
  | { type: TeamListAvilableAction.FETCH_TEAM_SUCCESS; payload: Team }
  | { type: TeamListAvilableAction.FETCH_TEAM_FAILURE; payload: string };

export type TeamsDispatch = React.Dispatch<TeamsActions>;

export type Team = {
  id: number;
  name: string;
  plays: string;
};
