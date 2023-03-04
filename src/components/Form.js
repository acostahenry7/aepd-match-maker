import React, { useEffect, useState } from "react";

import "./css/Form.css";

export default function Form({ setTeam, next, time }) {
  const [amount, setAmount] = useState(0);

  const [info, setInfo] = useState({ name: "", noOfMembers: "" });

  useEffect(() => {
    (() => {
      setTeam(amount);
    })();
  }, [amount]);

  const handleForm = (next) => {
    let element = document.getElementById(next);
    console.log("here");
    element.scrollIntoView({ behavior: "smooth" });
    setTeam(info);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div className="form-container">
        <form>
          <div className="form-group">
            <label style={{ fontSize: "20px", fontWeight: "bold" }}>
              NOMBRE PARA EQUIPO {time}
            </label>
            <input
              className="form-control mt-5"
              type="text"
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "25px",
                outline: "none",
                border: "none",
                borderBottom: ".5px solid rgba(255,255,255,0.3)",
                borderRadius: 0,
              }}
              onChange={(e) => {
                setInfo({
                  name: e.target.value,
                  noOfMembers: info.noOfMembers,
                });
              }}
            />
          </div>
          <div className="form-group mt-5">
            <label style={{ fontSize: "20px", fontWeight: "bold" }}>
              # DE PERSONAS
            </label>
            <input
              className="form-control mt-5"
              type="number"
              name="peopleQty"
              onChange={(e) => {
                setInfo({
                  name: info.name,
                  noOfMembers: e.target.value,
                });
              }}
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "30px",
                outline: "none",
                border: "none",
                borderBottom: ".5px solid rgba(255,255,255,0.3)",
                borderRadius: 0,
              }}
            />
          </div>
          <div className="form-group mt-5 text-center">
            <span
              onClick={() => {
                handleForm(next);
              }}
              style={{
                backgroundColor: "#e34e2b",
                padding: 10,
                fontWeight: "bold",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Siguiente
            </span>
          </div>
        </form>
      </div>
      {/* <div className="form-container">
        <form>
          <div className="form-group">
            <label>Nombre del 1er Equipo</label>
            <input
              className="form-control mt-2"
              type="text"
              autoFocus
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "25px",
                border: "none",
              }}
            />
          </div>
          <div className="form-group mt-5">
            <label>
              Selecciona la cantidad de personas para el primer equipo
            </label>
            <input
              className="form-control mt-2"
              type="number"
              name="peopleQty"
            />
          </div>
        </form>
      </div> */}
    </div>
  );
}
