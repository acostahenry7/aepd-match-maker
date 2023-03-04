import React, { useEffect, useState } from "react";
import Nextbtn from "./Nextbtn";

export default function TeamList({ team, next, setTeamMembers }) {
  const [amount, setAmount] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    (() => {
      let arr = [];
      for (let i = 0; i < team.noOfMembers; i++) {
        arr.push(i);
        console.log(i);
      }

      setAmount(arr);
    })();
  }, [team]);

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <h3> Integrantes de... </h3>
        <h1>
          <b>{team.name}</b>
        </h1>
      </div>
      <form>
        {amount.map((item, i) => (
          <input
            id={`${team?.name.split(" ").join("_")}_${i}`}
            key={i}
            style={{
              display: "block",
              fontSize: 25,
              margin: 5,
              marginTop: 15,
              borderRadius: 1,
              backgroundColor: "transparent",
              outline: "none",
              border: 0,
              borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
              color: "white",
            }}
            placeholder={`Nombre ${i + 1}`}
          />
        ))}
        <div className="form-group mt-5 text-center">
          <Nextbtn
            id={next}
            setMembers={setMembers}
            setTeamMembers={setTeamMembers}
            amount={amount}
            team={team}
          />
        </div>
      </form>
    </div>
  );
}
