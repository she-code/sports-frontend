import React, { useState } from "react";
import { Team } from "../../contexts/teams/types";

export default function PrefrenceItem(props: { team: Team }) {
  const { team } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form action="">
      <div className="flex " key={team.id}>
        <input
          type="checkbox"
          name={team?.name}
          id={team?.name}
          className="focus:outline-none mr-3"
        />
        <label htmlFor={team?.name}>{team?.name}</label>
      </div>
    </form>
  );
}
