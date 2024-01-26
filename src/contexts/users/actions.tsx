import { API_ENDPOINT } from "../../config/constants";

import {
  Preference,
  UpdatePasswordType,
  User,
  UserListAvilableAction,
  UserLoginPayload,
  UsersDispatch,
} from "./types";

/* registers user */
export const createUser = async (dispatch: UsersDispatch, user: User) => {
  dispatch({ type: UserListAvilableAction.CREATE_USER_REQUESTS });
  const { name, email, password } = user;
  try {
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Sign-up failed");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      console.error("Failed to create user:", data.errors[0].message);
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({
      type: UserListAvilableAction.CREATE_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem("auth_token", data.auth_token);
    localStorage.setItem("userData", JSON.stringify(data.user));
    //redirect user
    return { ok: true };
  } catch (error) {
    console.error("Sign-up failed:", error);
    dispatch({
      type: UserListAvilableAction.CREATE_USER_FAILURE,
      payload: "Unable to create user",
    });
    return { ok: false, error };
  }
};

/** sings in user */
export const signinUser = async (
  dispatch: UsersDispatch,
  user: UserLoginPayload
) => {
  const { email, password } = user;
  try {
    dispatch({ type: UserListAvilableAction.SIGNIN_USER_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    /* Feedback: Display a user-friendly message that provides more specific details, 
   rather than a generic "Sign-in failed" message.*/
    if (!response.ok) {
      throw new Error("Sign-in failed");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    localStorage.setItem("auth_token", data.auth_token);
    localStorage.setItem("userData", JSON.stringify(data.user));
    dispatch({
      type: UserListAvilableAction.SIGNIN_USER_SUCCESS,
      payload: data,
    });
    return { ok: true };
  } catch (error) {
    dispatch({
      type: UserListAvilableAction.SIGNIN_USER_FAILURE,
      payload: "Unable to signin user",
    });
    return { ok: false, error };
  }
};

/** fetches user details */
export const fetchUser = async (dispatch: UsersDispatch) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    dispatch({ type: UserListAvilableAction.FETCH_USER_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });
    const data = await response.json();
    const user = Object.values(data)[0] as User;
    console.log("user data", data);
    console.log(`Bearer ${auth_token}`);
    if (user) {
      dispatch({
        type: UserListAvilableAction.FETCH_USER_SUCCESS,
        payload: data,
      });
    }
    console.log("User", user);
  } catch (error) {
    console.log(error);
    dispatch({
      type: UserListAvilableAction.FETCH_USER_FAILURE,
      payload: "Unable to fetch user",
    });
  }
};

/** gets user's preferences */
export const fetchPreferences = async (dispatch: UsersDispatch) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    dispatch({ type: UserListAvilableAction.FETCH_PRFRENCES_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });
    const data = await response.json();
    const preferences = Object.values(data)[0] as Preference;

    if (preferences) {
      dispatch({
        type: UserListAvilableAction.FETCH_PREFRENCES_SUCCESS,
        payload: preferences,
      });
    }
  } catch (error) {
    dispatch({
      type: UserListAvilableAction.FETCH_PREFRENCES_FAILURE,
      payload: "Unable to fetch preferences",
    });
  }
};

/*** updates team preference */
export const updateTeamPreferences = async (
  _dispatch: UsersDispatch,
  favTeams: Preference
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    const preferences = JSON.stringify({ preferences: favTeams });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: preferences,
    });
    const data = await response.json();
    console.log("preferences ", data);
  } catch (error) {
    console.log(error);
  }
};

/*** updates user's password */
export const updatePassword = async (
  dispatch: UsersDispatch,
  updatePasswordPayload: UpdatePasswordType
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    dispatch({ type: UserListAvilableAction.UPDATE_PASSWORD_REQUEST });
    const passwordPayload = JSON.stringify(updatePasswordPayload);
    const response = await fetch(`${API_ENDPOINT}/user/password`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: passwordPayload,
    });
    const data = await response.json();
    if (data.status) {
      dispatch({
        type: UserListAvilableAction.UPDATE_PASSWORD_SUCCESS,
        payload: updatePasswordPayload.new_password,
      });
      return { status: data?.status, message: data?.message };
    }
  } catch (error) {
    dispatch({
      type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE,
      payload: "Unable to update password",
    });
  }
};

/*** updates sports preference */
export const updateSportPreferences = async (
  _dispatch: UsersDispatch,
  favSports: Preference
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    const preferences = JSON.stringify({ preferences: favSports });
    await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: preferences,
    });
  } catch (error) {
    console.log(error);
  }
};
