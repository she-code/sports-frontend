import { Team } from "../../contexts/teams/types";
import { Sport } from "../../contexts/sports/types";
import { useUsersDispatch, useUsersState } from "../../hooks/users";
import { Preference, UserListAvilableAction } from "../../contexts/users/types";
import { useEffect } from "react";
import { updateTeamPreferences } from "../../contexts/users/actions";

export default function PrefrenceItem(props: { data: Team | Sport }) {
  const { data } = props;
  // const [isChecked, setIsChecked] = useState(false);
  const userDispatch = useUsersDispatch();
  const userState = useUsersState();
  const { preferences } = userState;

  const handleCheckBoxChange = (name: string) => {
    if (name != "")
      userDispatch({
        type: UserListAvilableAction.SET_TEAM_PREFERENCES,
        payload: name,
      });
  };

  useEffect(() => {
    const updatePreferences = async () => {
      const updatedPrefrences = await updateTeamPreferences(
        userDispatch,
        preferences as Preference
      );
      console.log({ updatedPrefrences }, "from prefrences");
    };
    updatePreferences();
  }, [preferences?.preferences.teams, handleCheckBoxChange]);

  // useEffect(() => {
  //   // This code will run whenever 'preferences' changes.
  //   console.log({ preferences });
  //   const handleCheckBoxChange = async () => {
  //     const updatedPrefrences = await updateTeamPreferences(
  //       userDispatch,
  //       preferences as Preference
  //     );
  //     console.log({ updatedPrefrences });
  //   };
  //   handleCheckBoxChange();
  // }, [preferences?.teams.length, ]);

  return (
    <form action="">
      <div className="flex " key={data.id}>
        <input
          type="checkbox"
          name={data?.name}
          id={data?.name}
          className="focus:outline-none mr-3"
          // checked={getPreferences().teams.some(
          //   (item) => item.toLowerCase() === data?.name.toLowerCase()
          // )}
          onChange={() => {
            // setName(data?.name);
            // console.log({ name });
            handleCheckBoxChange(data?.name);
          }}
        />
        <label htmlFor={data?.name}>{data?.name}</label>
      </div>
    </form>
  );
}
