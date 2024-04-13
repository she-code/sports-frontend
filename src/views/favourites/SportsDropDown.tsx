import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  if (isError) {
    return <div>{t("error")}</div>;
  }
  if (isLoading && sports.length === 0) {
    return <div>{t("loading")}...</div>;
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
        <option value="">{t("sports")}</option>
        {sports
          ?.filter((sport) =>
            preferences?.sports?.length
              ? preferences?.sports?.includes(sport.name)
              : true
          )
          .map((sport, sportIdx) => (
            <option key={sportIdx} value={sport.name}>
              {t(sport.name)}
            </option>
          ))}
      </select>
    </div>
  );
}
