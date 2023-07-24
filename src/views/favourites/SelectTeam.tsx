import { useTeamsState } from "../../hooks/teams";

export default function SelectTeam(props: {
  setTeamFiltersCB: (options: string) => void;
  selectedSport: string;
}) {
  const { setTeamFiltersCB, selectedSport } = props;
  const teamState = useTeamsState();
  const { isLoading, isError, teams } = teamState;
  console.log({ selectedSport });
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
        className="w-full focus:outline-none px-4 py-4 mr-5 focus:border-l-green-500 focus:border-l-4  text-lg font-semibold rounded-md border-2"
        onChange={(e) => setTeamFiltersCB(e.target.value)}
        defaultValue=""
      >
        <option disabled value="">
          Teams
        </option>
        {teams
          .filter((team) => team.plays == selectedSport)
          .map((team, teamIdx) => (
            <option key={teamIdx} value={team.name}>
              {team.name}
            </option>
          ))}
      </select>
    </div>
  );
}
