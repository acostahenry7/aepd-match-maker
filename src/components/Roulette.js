import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WinnerModal from "./WinnerModal";

export default function Roulette({ teams, teamsInfo, setCouples, couples }) {
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

  const [data, setData] = useState([{ style: { backgroundColor: "#364454" } }]);
  const [prize, setPrize] = useState(undefined);

  const [mustSpin, setMustSpin] = useState(false);
  const [whoSpined, setWhoSpined] = useState(0);
  const [whoMustSpin, setWhoMustSpin] = useState(0);
  const [spinTimes, setSpinTimes] = useState(0);

  const [modalShow, setModalShow] = useState(false);

  const [teamsArr, setTeamsArr] = useState([]);

  useEffect(() => {
    (() => {
      setTeamsArr(teams);
    })();
  }, [teams]);

  useEffect(() => {
    (() => {
      let arr = [];
      console.log(teamsArr);
      teamsArr[whoMustSpin]?.map((item) => {
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
  }, [teamsArr, whoMustSpin]);

  const handleClick = (e) => {
    if (teamsArr[0].length > 0 || teamsArr[1].length > 0) {
      let random = Math.floor(Math.random() * teams[whoMustSpin].length);
      setPrize(random);

      setSpinTimes(spinTimes + 1);
      setMustSpin(true);
    } else {
      let element = document.getElementById("section_6");
      element.scrollIntoView({ behavior: "smooth" });
      setCouples([...couples, []]);
    }
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
      {teamsArr.length > 0 && (
        <WinnerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          winner={teamsArr[whoSpined][prize]}
          winnerIndex={prize}
          winnerArr={teamsArr[whoMustSpin]}
          setWhoSpined={setWhoSpined}
          setWhoMustSpin={setWhoMustSpin}
          whoSpined={whoSpined}
          spinTimes={spinTimes}
        />
      )}

      <div style={{ color: "black", marginBottom: 30 }}>
        <h3>{teamsInfo[whoMustSpin].name} </h3>
      </div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prize}
        onStopSpinning={() => {
          setModalShow(true);

          let lastIndex = couples.length - 1;

          if (couples.length > 0) {
            if (couples[lastIndex]?.length < 2) {
              let arr = couples;
              arr[lastIndex].push(teamsArr[whoSpined][prize]);
              setCouples(arr);
              //console.log(couples);
            } else {
              let arr = couples;
              arr.push([teamsArr[whoSpined][prize]]);
              setCouples(arr);
            }
          } else {
            couples.push([teamsArr[whoSpined][prize]]);
          }

          console.log("COUPLES", couples);

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
