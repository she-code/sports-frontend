import { useTeamsState } from "../../hooks/teams";

export default function SelectTeam(props: {
  setTeamFiltersCB: (options: string) => void;
}) {
  const { setTeamFiltersCB } = props;
  const teamState = useTeamsState();
  const { isLoading, isError, teams } = teamState;

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading && teams.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {" "}
      <select
        aria-label="Filter Tasks"
        title="Filter Tasks"
        className=" focus:outline-none px-4 py-4 mr-5 focus:border-l-green-500 focus:border-l-4  text-lg font-semibold rounded-md"
        onChange={(e) => setTeamFiltersCB(e.target.value)}
        defaultValue=""
      >
        <option disabled value="">
          Teams
        </option>
        {teams.map((team, teamIdx) => (
          <option key={teamIdx} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}
