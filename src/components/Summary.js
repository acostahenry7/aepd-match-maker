import React, { useState, useEffect } from "react";
import "./css/Summary.css";
import Nextbtn from "./Nextbtn";

export default function Summary({ couples }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    (() => {
      console.log(couples);
      setArr(couples);
    })();
  }, [couples]);

  return (
    <div>
      <div>
        <h3>Resumen</h3>
      </div>
      {arr?.map((c, i) => (
        <div key={i} className="summary-list" style={{}}>
          <span>{c[0]}</span>
          <span>{c[1]}</span>
        </div>
      ))}
      <Nextbtn id={"section_1"} team={{ name: "sum" }} />
    </div>
  );
}
