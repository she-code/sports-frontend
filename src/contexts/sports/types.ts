export type Sport = {
  id: number;
  name: string;
};

export type SportsState = {
  sports: Sport[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  sport?: Sport;
};
export enum SportListAvilableAction {
  FETCH_SPORTS_REQUESTS = "FETCH_SPORTS_REQUESTS",
  FETCH_SPORTS_SUCCESS = "FETCH_SPORTS_SUCCESS",
  FETCH_SPORTS_FAILURE = "FETCH_SPORTS_FAILURE",
  FETCH_SPORT_REQUESTS = "FETCH_SPORT_REQUESTS",
  FETCH_SPORT_SUCCESS = "FETCH_SPORT_SUCCESS",
  FETCH_SPORT_FAILURE = "FETCH_SPORT_FAILURE",
}

export type SportsActions =
  | {
      type: SportListAvilableAction.FETCH_SPORTS_REQUESTS;
    }
  | {
      type: SportListAvilableAction.FETCH_SPORTS_SUCCESS;
      payload: Sport[];
    }
  | { type: SportListAvilableAction.FETCH_SPORTS_FAILURE; payload: string }
  | { type: SportListAvilableAction.FETCH_SPORT_REQUESTS }
  | { type: SportListAvilableAction.FETCH_SPORT_SUCCESS; payload: Sport }
  | { type: SportListAvilableAction.FETCH_SPORT_FAILURE; payload: string };

export type SportsDispatch = React.Dispatch<SportsActions>;
