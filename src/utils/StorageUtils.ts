import { Preference } from "../contexts/users/types";

export const getPreferences = (): Preference => {
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData as string);
  return user.preferences;
};
