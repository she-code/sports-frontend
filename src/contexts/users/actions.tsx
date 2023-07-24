import { API_ENDPOINT } from "../../config/constants";

import {
  User,
  UserListAvilableAction,
  UserLoginPayload,
  UsersDispatch,
} from "./types";

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
      console.error("Failed to create user:", data.errors[0].message);
      return { ok: false, error: data.errors[0].message };
    }

    localStorage.setItem("auth_token", data.auth_token);
    localStorage.setItem("userData", JSON.stringify(data.user));
    dispatch({
      type: UserListAvilableAction.SIGNIN_USER_SUCCESS,
      payload: data,
    });
    console.log("Sign-in successful");

    //redirect user

    return { ok: true };
  } catch (error) {
    console.error("Sign-in failed:", error);
    dispatch({
      type: UserListAvilableAction.SIGNIN_USER_FAILURE,
      payload: "Unable to signin user",
    });
    return { ok: false, error };
  }
};
