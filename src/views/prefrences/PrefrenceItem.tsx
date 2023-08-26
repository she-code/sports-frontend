import { Team } from "../../contexts/teams/types";
import { getPreferences } from "../../utils/StorageUtils";
import { Sport } from "../../contexts/sports/types";

export default function PrefrenceItem(props: { data: Team | Sport }) {
  const { data } = props;
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <form action="">
      <div className="flex " key={data.id}>
        <input
          type="checkbox"
          name={data?.name}
          id={data?.name}
          className="focus:outline-none mr-3"
          checked={getPreferences().teams.some(
            (item) => item.toLowerCase() === data?.name.toLowerCase()
          )}
          onChange={() => {}}
        />
        <label htmlFor={data?.name}>{data?.name}</label>
      </div>
    </form>
  );
}
