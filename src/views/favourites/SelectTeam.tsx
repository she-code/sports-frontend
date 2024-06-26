import { useTranslation } from "react-i18next";
import { useTeamsState } from "../../hooks/teams";
import { useUsersState } from "../../hooks/users";

export default function SelectTeam(props: {
  setTeamFiltersCB: (options: string) => void;
  selectedSport: string;
}) {
  const { setTeamFiltersCB, selectedSport } = props;
  const teamState = useTeamsState();
  const userState = useUsersState();
  const { isLoading, isError, teams } = teamState;
  const { preferences } = userState;
  const { t } = useTranslation();
  if (isError) {
    return <div>{t("unableToFetch")}</div>;
  }
  if (isLoading && teams.length === 0) {
    return <div>{t("loading")}...</div>;
  }
  return (
    <div>
      {" "}
      <select
        aria-label="Filter Tasks"
        title="Filter Tasks"
        className=" w-5/6 focus:outline-none px-4 py-4 mr-5 focus:border-l-green-500 focus:border-l-4  text-lg font-semibold rounded-md border-2"
        onChange={(e) => setTeamFiltersCB(e.target.value)}
        defaultValue=""
      >
        <option value="" className="text-slate-500">
          {t("teams")}
        </option>
        {teams
          ?.filter((team) => {
            if (selectedSport === "") {
              return true;
            }
            return team.plays == selectedSport;
          })
          .filter((team) =>
            preferences?.teams?.length
              ? preferences?.teams?.includes(team?.name)
              : true,
          )
          .map((team, teamIdx) => (
            <option key={teamIdx} value={team.name}>
              {team.name}
            </option>
          ))}
      </select>
    </div>
  );
}
