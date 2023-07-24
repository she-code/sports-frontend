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
  | { type: UserListAvilableAction.SIGNIN_USER_FAILURE; payload: string };

export type UserLoginPayload = Omit<User, "id" | "preferences" | "name">;

export type UsersDispatch = React.Dispatch<UsersActions>;
