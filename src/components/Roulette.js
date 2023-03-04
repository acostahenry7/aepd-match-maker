import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";

export default function Roulette({ teams }) {
  const colors = [
    ["3E54AC"],
    ["b7c4e1"],
    ["E7B10A"],
    ["a7ba4a"],
    ["6fb87f"],
    ["4E6E81"],
    ["eacaa8"],
    ["9DC08B"],
    ["FDD36A"],
    ["865DFF"],
    ["68dadf"],
    ["C92C6D"],
    ["362FD9"],
    ["4D455D"],
    ["45cad0"],
    ["0F6292"],
    ["85CDFD"],
    ["CD5888"],
    ["BFDB38"],
  ];

  const [data, setData] = useState([]);
  const [prize, setPrize] = useState(undefined);

  const [mustSpin, setMustSpin] = useState(false);
  const [whoSpined, setWhoSpined] = useState(0);
  const [whoMustSpin, setWhoMustSpin] = useState(0);
  const [spinTimes, setSpinTimes] = useState(0);

  useEffect(() => {
    (() => {
      let arr = [];
      teams[whoMustSpin]?.map((item) => {
        let backgroundColor = Math.floor(Math.random() * colors.length);
        arr.push({
          option: item,
          style: {
            backgroundColor: `#${colors[backgroundColor][0]}`,
            textColor: `#${colors[backgroundColor][1] || "fff"}`,
          },
        });
      });
      setData(arr);
    })();
  }, [teams, whoMustSpin]);

  const handleClick = (e) => {
    if (whoSpined == 0 && spinTimes != 0) {
      setWhoSpined(1);
      setWhoMustSpin(1);
    } else {
      setWhoSpined(0);
      setWhoMustSpin(0);
    }

    let random = Math.floor(Math.random() * teams[whoMustSpin].length);
    setPrize(random);

    console.log("RANDOM", random);

    setSpinTimes(spinTimes + 1);
    setMustSpin(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255,255,255,1)",
        padding: 40,
        borderRadius: 15,
        // margin: 20,
      }}
    >
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prize}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        data={data}
        backgroundColors={["#FDD36A"]}
        outerBorderColor={"rgba(255,255,255,0.2)"}
        outerBorderWidth={1}
        textColors={["white"]}
        radiusLineColor={"rgba(255,255,255,0.7)"}
      />
      <span
        style={{
          marginTop: 40,
          padding: 10,
          backgroundColor: "#e34e2b",
          borderColor: "#e34e2b",
          borderRadius: 6,
          width: "auto",
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        ¿Quién sigue?
      </span>
    </div>
  );
}
