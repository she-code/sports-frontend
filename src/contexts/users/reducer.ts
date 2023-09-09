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
      console.log(action.payload, "payload");
      return { ...state, isLoading: false, user: action.payload };
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
      return { ...state, isLoading: true };
    }
    case UserListAvilableAction.FETCH_PREFRENCES_SUCCESS: {
      console.log(action.payload, "payload prefrences");
      return { ...state, isLoading: false, preferences: action.payload };
    }
    // case UserListAvilableAction.FETCH_PREFRENCES_FAILURE: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     preferences: {
    //       sports: [],
    //       teams: [],
    //     },
    //     errorMessage: action.payload,
    //   };
    // }
    case UserListAvilableAction.SET_TEAM_PREFERENCES: {
      console.log("called", action.payload);

      const existingTeams = state?.preferences?.teams || [];
      let updatedTeams = [];
      if (existingTeams.includes(action.payload)) {
        updatedTeams = existingTeams.filter((team) => team !== action.payload);
        console.log({ updatedTeams }, "filtered");
      } else {
        updatedTeams = [...existingTeams, action.payload];
      }

      return {
        ...state,
        isLoading: false,
        preferences: {
          ...state?.preferences,
          teams: updatedTeams,
          sports: [...(state.preferences?.sports ?? [])],
        },
      };
    }

    // case UserListAvilableAction.SET_TEAM_PREFERENCES: {
    //   console.log("called", action.payload);
    //   return {
    //     ...state,
    //     isLoading: false,
    //     preferences: {
    //       ...state.preferences,
    //       teams: [...(state.preferences?.teams ?? []), action.payload],
    //       sports: [...(state.preferences?.sports ?? [])],
    //     },
    //   };
    // }

    case UserListAvilableAction.UPDATE_TEAM_PRFERENCES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserListAvilableAction.UPDATE_TEAM_PRFERENCES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        preferences: {
          ...state.preferences,
          ...action.payload,
        },
        isError: false,
      };
    }
    case UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        preferences: {
          teams: [] as string[],
          sports: [] as string[],
        },
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
