import { Sport } from "../../contexts/sports/types";
import { useUsersDispatch, useUsersState } from "../../hooks/users";
import { Preference, UserListAvilableAction } from "../../contexts/users/types";
import { useEffect, useState } from "react";
import { updateSportPreferences } from "../../contexts/users/actions";
import { useTranslation } from "react-i18next";

export default function PrefrenceSportItem(props: { data: Sport }) {
  const { data } = props;
  const userDispatch = useUsersDispatch();
  const userState = useUsersState();
  const { preferences } = userState;

  const [handleCheckBoxChangeCalled, setHandleCheckBoxChangeCalled] =
    useState(false);

  const handleCheckBoxChange = (name: string) => {
    if (name !== "") {
      userDispatch({
        type: UserListAvilableAction.SET_SPORT_PREFERENCES,
        payload: name,
      });
      setHandleCheckBoxChangeCalled(true);
    }
  };
  useEffect(() => {
    const updatePreferences = async () => {
      const updatedPreferences = await updateSportPreferences(
        userDispatch,
        preferences as Preference
      );
      console.log({ updatedPreferences }, "from preferences");
    };

    if (handleCheckBoxChangeCalled) {
      updatePreferences();
      setHandleCheckBoxChangeCalled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleCheckBoxChange]);
  const { t } = useTranslation();
  return (
    <form action="">
      <div className="flex " key={data.id}>
        <input
          type="checkbox"
          name={data?.name}
          id={data?.name}
          className="focus:outline-none mr-3"
          checked={preferences?.sports?.some(
            (item) => item?.toLowerCase() === data?.name.toLowerCase()
          )}
          onChange={() => {
            handleCheckBoxChange(data?.name);
          }}
        />
        <label htmlFor={data?.name}>{t(data?.name)}</label>
      </div>
    </form>
  );
}
