import { useSportsState } from "../../hooks/sports";
import { useUsersState } from "../../hooks/users";

export default function SportDropDown(props: {
  setSportFilterCB: (options: string) => void;
}) {
  const { setSportFilterCB } = props;
  const sportState = useSportsState();
  const userState = useUsersState();
  const { preferences } = userState;
  const { isLoading, isError, sports } = sportState;

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading && sports.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {" "}
      <select
        aria-label="Filter Tasks"
        title="Filter Tasks"
        className=" focus:outline-none px-4 py-4 mr-5 focus:border-l-green-500 focus:border-l-4  text-lg font-semibold rounded-md border-2"
        onChange={(e) => setSportFilterCB(e.target.value)}
        defaultValue=""
      >
        <option value="">Sports</option>
        {sports
          .filter((sport) =>
            preferences?.sports
              ? preferences?.sports?.includes(sport.name.toLowerCase())
              : true
          )
          .map((sport, sportIdx) => (
            <option key={sportIdx} value={sport.name}>
              {sport.name}
            </option>
          ))}
      </select>
    </div>
  );
}
