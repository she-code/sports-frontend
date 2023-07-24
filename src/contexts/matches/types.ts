export type Match = {
  id: number;
  name: string;
  location: string;
  sportName: number;
  endsAt: Date;
};

export enum MatchListAvilableAction {
  FETCH_MATCHES_REQUESTS = "FETCH_MATCHES_REQUESTS",
  FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS",
  FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE",
  FETCH_MATCH_REQUESTS = "FETCH_MATCH_REQUESTS",
  FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS",
  FETCH_MATCH_FAILURE = "FETCH_MATCH_FAILURE",
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
  | { type: MatchListAvilableAction.FETCH_MATCH_FAILURE; payload: string };

export type MatchesDispatch = React.Dispatch<MatchActions>;

export type MatchesState = {
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  match?: Match;
};
