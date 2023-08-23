import { Team } from "../teams/types";

export type Match = {
  id: number;
  name: string;
  location: string;
  sportName: number;
  endsAt: Date;
  startsAt: Date;
  score?: {
    [key: string]: number;
  };
  teams: Team[];
  playingTeam: number;
  story: string;
  isRunning: boolean;
};

export enum MatchListAvilableAction {
  FETCH_MATCHES_REQUESTS = "FETCH_MATCHES_REQUESTS",
  FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS",
  FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE",
  FETCH_MATCH_REQUESTS = "FETCH_MATCH_REQUESTS",
  FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS",
  FETCH_MATCH_FAILURE = "FETCH_MATCH_FAILURE",
  CLEAR_MATCH = "CLEAR_MATCH",
}

export type MatchActions =
  | {
      type: MatchListAvilableAction.FETCH_MATCHES_REQUESTS;
    }
  | {
      type: MatchListAvilableAction.FETCH_MATCHES_SUCCESS;
      payload: Match[];
    }
  | { type: MatchListAvilableAction.FETCH_MATCHES_FAILURE; payload: string }
  | { type: MatchListAvilableAction.FETCH_MATCH_REQUESTS }
  | { type: MatchListAvilableAction.FETCH_MATCH_SUCCESS; payload: Match }
  | { type: MatchListAvilableAction.FETCH_MATCH_FAILURE; payload: string }
  | { type: MatchListAvilableAction.CLEAR_MATCH };

export type MatchesDispatch = React.Dispatch<MatchActions>;

export type MatchesState = {
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  match?: Match;
};
