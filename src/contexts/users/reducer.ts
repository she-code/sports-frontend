import { Reducer } from "react";
import { UserListAvilableAction, UsersState, UsersActions } from "./types";

// Define the initial state
export const initialState: UsersState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  users: [],
};
export const userReducer: Reducer<UsersState, UsersActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserListAvilableAction.FETCH_USER_REQUESTS:
      return { ...state, isLoading: true };
    case UserListAvilableAction.FETCH_USER_SUCCESS: {
      return { ...state, isLoading: false, sport: action.payload };
    }
    case UserListAvilableAction.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case UserListAvilableAction.CREATE_USER_REQUESTS: {
      return { ...state, isLoading: true };
    }
    case UserListAvilableAction.CREATE_USER_SUCCESS: {
      return { ...state, isLoading: false, user: action.payload };
    }
    case UserListAvilableAction.CREATE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    }
    case UserListAvilableAction.SIGNIN_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case UserListAvilableAction.SIGNIN_USER_SUCCESS: {
      return { ...state, isLoading: false, user: action.payload };
    }
    case UserListAvilableAction.SIGNIN_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    }

    case UserListAvilableAction.FETCH_PRFRENCES_REQUEST: {
      console.log("request");
      return { ...state, isLoading: true };
    }
    // case UserListAvilableAction.FETCH_PREFRENCES_SUCCESS: {
    //   console.log(action.payload, "payload");
    //   return { ...state, isLoading: false, preferences: action.payload };
    // }
    // case UserListAvilableAction.FETCH_PREFRENCES_FAILURE: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     preferences: {
    //       prefrences: {
    //         sports: [],
    //         teams: [],
    //       },
    //     },
    //     errorMessage: action.payload,
    //   };
    // }

    default:
      return state;
  }
};
