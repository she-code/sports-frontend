export type User = {
  id?: number;
  name: string;
  email: string;
  password?: string;
  preferences?: object;
};
export type UsersState = {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  user?: User;
  preferences?: Preference;
};
export enum UserListAvilableAction {
  FETCH_USERS_REQUESTS = "FETCH_USERS_REQUESTS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
  FETCH_USER_REQUESTS = "FETCH_USER_REQUESTS",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  CREATE_USER_REQUESTS = "CREATE_USER_REQUESTS",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  CREATE_USER_FAILURE = "CREATE_USER_FAILURE",
  SIGNIN_USER_REQUEST = "SIGNIN_USER_REQUEST",
  SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS",
  SIGNIN_USER_FAILURE = "SIGNIN_USER_FAILURE",
  FETCH_PRFRENCES_REQUEST = "FETCH_PRFRENCES_REQUEST",
  FETCH_PREFRENCES_SUCCESS = "FETCH_PREFRENCES_SUCCESS",
  FETCH_PREFRENCES_FAILURE = "FETCH_PREFRENCES_FAILUR",
  UPDATE_PRFERENCES_REQUEST = " UPDATE_PRFERENCES_REQUEST",
  UPDATE_PRFERENCES_SUCCESS = "UPDATE_PRFERENCES_SUCCESS",
  UPDATE_PRFERENCES_FAILURE = "UPDATE_PRFERENCES_FAILURE",
  SET_TEAM_PREFERENCES = " SET_TEAM_PREFERENCES",
  UPDATE_TEAM_PRFERENCES_REQUEST = " UPDATE_TEAM_PRFERENCES_REQUEST",
  UPDATE_TEAM_PRFERENCES_SUCCESS = "UPDATE_TEAM_PRFERENCES_SUCCESS",
  UPDATE_TEAM_PRFERENCES_FAILURE = "UPDATE_TEAM_PRFERENCES_FAILURE",
}

export type UsersActions =
  | {
      type: UserListAvilableAction.FETCH_USERS_REQUESTS;
    }
  | {
      type: UserListAvilableAction.FETCH_USERS_SUCCESS;
      payload: User[];
    }
  | { type: UserListAvilableAction.FETCH_USERS_FAILURE; payload: string }
  | { type: UserListAvilableAction.FETCH_USER_REQUESTS }
  | { type: UserListAvilableAction.FETCH_USER_SUCCESS; payload: User }
  | { type: UserListAvilableAction.FETCH_USER_FAILURE; payload: string }
  | { type: UserListAvilableAction.CREATE_USER_REQUESTS }
  | { type: UserListAvilableAction.CREATE_USER_SUCCESS; payload: User }
  | { type: UserListAvilableAction.CREATE_USER_FAILURE; payload: string }
  | { type: UserListAvilableAction.SIGNIN_USER_REQUEST }
  | { type: UserListAvilableAction.SIGNIN_USER_SUCCESS; payload: User }
  | { type: UserListAvilableAction.SIGNIN_USER_FAILURE; payload: string }
  | { type: UserListAvilableAction.FETCH_PRFRENCES_REQUEST }
  | {
      type: UserListAvilableAction.FETCH_PREFRENCES_SUCCESS;
      payload: Preference;
    }
  | { type: UserListAvilableAction.FETCH_PREFRENCES_FAILURE; payload: string }
  | {
      type: UserListAvilableAction.UPDATE_PRFERENCES_REQUEST;
    }
  | {
      type: UserListAvilableAction.UPDATE_PRFERENCES_SUCCESS;
      payload: Preference;
    }
  | {
      type: UserListAvilableAction.UPDATE_PRFERENCES_FAILURE;
      payload: string;
    }
  | {
      type: UserListAvilableAction.SET_TEAM_PREFERENCES;
      payload: string;
    }
  | {
      type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_REQUEST;
    }
  | {
      type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_SUCCESS;
      payload: Preference;
    }
  | {
      type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE;
      payload: string;
    };

export type Preference = {
  preferences: { sports: string[]; teams: string[] };
};

export type UserLoginPayload = Omit<User, "id" | "preferences" | "name">;

export type UsersDispatch = React.Dispatch<UsersActions>;
