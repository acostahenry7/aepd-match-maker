import React from "react";

export default function Nextbtn({ id, amount, team, setTeamMembers }) {
  let arr = [];
  const handleNext = (id, amount, team) => {
    console.log("hey", team.name);
    for (let i = 0; i < amount.length; i++) {
      arr.push(
        document.getElementById(`${team?.name.split(" ").join("_")}_${i}`).value
      );
    }

    setTeamMembers(arr);

    let element = document.getElementById(id.toString());
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      onClick={() => {
        handleNext(id, amount, team);
      }}
      style={{
        backgroundColor: "#e34e2b",
        padding: 10,
        fontWeight: "bold",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      Siguiente
    </span>
  );
}
