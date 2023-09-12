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
    console.log("Sign-up successful");

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

/** sigs in user */
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
    console.log("Sign-in successful", data);
    return { ok: true };
  } catch (error) {
    dispatch({
      type: UserListAvilableAction.SIGNIN_USER_FAILURE,
      payload: "Unable to signin user",
    });
    return { ok: false, error };
  }
};

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
    console.log("prefrences", data);
    console.log(`Bearer ${auth_token}`);
    if (preferences) {
      dispatch({
        type: UserListAvilableAction.FETCH_PREFRENCES_SUCCESS,
        payload: preferences,
      });
    }
    console.log("prefrences", preferences);
  } catch (error) {
    console.log(error);
    dispatch({
      type: UserListAvilableAction.FETCH_PREFRENCES_FAILURE,
      payload: "Unable to fetch preferences",
    });
  }
};

export const updatePreferences = async (
  dispatch: UsersDispatch,
  preferences: Preference
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    dispatch({ type: UserListAvilableAction.UPDATE_PRFERENCES_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });
    const data = await response.json();
    console.log("prefrences", data);
    dispatch({
      type: UserListAvilableAction.UPDATE_PRFERENCES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UserListAvilableAction.UPDATE_PRFERENCES_FAILURE,
      payload: "Unable to update preferences",
    });
  }
};

export const updateTeamPreferences = async (
  _dispatch: UsersDispatch,
  favTeams: Preference
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    // dispatch({ type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_REQUEST });
    const preferences = JSON.stringify({ preferences: favTeams });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: preferences,
    });
    console.log(JSON.stringify(favTeams), "from front");
    const data = await response.json();
    console.log("prefrences", data);
    // dispatch({
    //   type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_SUCCESS,
    //   payload: data,
    // });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE,
    //   payload: "Unable to update preferences",
    // });
  }
};
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
    console.log(JSON.stringify(passwordPayload), "from update Password");
    const data = await response.json();
    console.log("password", data);
    if (data.status) {
      dispatch({
        type: UserListAvilableAction.UPDATE_PASSWORD_SUCCESS,
        payload: updatePasswordPayload.new_password,
      });
      return { status: data?.status, message: data?.message };
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE,
      payload: "Unable to update password",
    });
  }
};
export const updateSportPreferences = async (
  _dispatch: UsersDispatch,
  favSports: Preference
) => {
  try {
    const auth_token = localStorage.getItem("auth_token");
    // dispatch({ type: UserListAvilableAction.UPDATE_Sport_PRFERENCES_REQUEST });
    const preferences = JSON.stringify({ preferences: favSports });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: preferences,
    });
    console.log(JSON.stringify(favSports), "from front sports");
    const data = await response.json();
    console.log("prefrences", data);
    // dispatch({
    //   type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_SUCCESS,
    //   payload: data,
    // });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: UserListAvilableAction.UPDATE_TEAM_PRFERENCES_FAILURE,
    //   payload: "Unable to update preferences",
    // });
  }
};
