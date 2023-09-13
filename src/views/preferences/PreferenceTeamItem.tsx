import { Team } from "../../contexts/teams/types";
import { Sport } from "../../contexts/sports/types";
import { useUsersDispatch, useUsersState } from "../../hooks/users";
import { Preference, UserListAvilableAction } from "../../contexts/users/types";
import { useEffect, useState } from "react";
import { updateTeamPreferences } from "../../contexts/users/actions";

export default function PrefrenceTeamItem(props: { data: Team | Sport }) {
  const { data } = props;
  const userDispatch = useUsersDispatch();
  const userState = useUsersState();
  const { preferences } = userState;

  const [handleCheckBoxChangeCalled, setHandleCheckBoxChangeCalled] =
    useState(false);

  const handleCheckBoxChange = (name: string) => {
    if (name !== "") {
      userDispatch({
        type: UserListAvilableAction.SET_TEAM_PREFERENCES,
        payload: name,
      });
      setHandleCheckBoxChangeCalled(true);
    }
  };
  useEffect(() => {
    const updatePreferences = async () => {
      await updateTeamPreferences(userDispatch, preferences as Preference);
    };

    if (handleCheckBoxChangeCalled) {
      updatePreferences();
      setHandleCheckBoxChangeCalled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleCheckBoxChange]);

  return (
    <form action="">
      <div className="flex " key={data.id}>
        <input
          type="checkbox"
          name={data?.name}
          id={data?.name}
          className="focus:outline-none mr-3"
          checked={preferences?.teams?.some(
            (item) => item.toLowerCase() === data?.name.toLowerCase()
          )}
          onChange={() => {
            handleCheckBoxChange(data?.name);
          }}
        />
        <label htmlFor={data?.name}>{data?.name}</label>
      </div>
    </form>
  );
}
