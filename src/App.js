import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "react-router-dom";

import Form from "./components/Form";
import Roulette from "./components/Roulette";
import Summary from "./components/Summary";
import TeamList from "./components/TeamList";
import image from "./resources/hi.jpeg";

import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  const [team1, setTeam1] = useState({});
  const [team2, setTeam2] = useState({});

  const [couples, setCouples] = useState([]);

  const [teamMembers1, setTeamMembers1] = useState([]);
  const [teamMembers2, setTeamMembers2] = useState([]);

  useEffect(() => {
    (() => {
      console.log(team1);
    })();
  }, [team1]);

  useEffect(() => {
    (() => {
      console.log(teamMembers1);
    })();
  }, [teamMembers1]);

  return (
    <div className="App">
      <div className="App-bg" id="section_1">
        <div style={{ marginBottom: 100 }}>
          <h4>Bienvenidos a...</h4>
          <h1>Conociendo a Jesús</h1>
          <h4> Asociación Evangelística el Plan de Dios</h4>
        </div>
        <div className="roulette-container">
          <Form setTeam={setTeam1} next="section_2" time={1} autoFocus={true} />
        </div>
      </div>
      <div className="App-bg" id="section_2">
        <div className="roulette-container">
          <TeamList
            team={team1}
            next="section_3"
            setTeamMembers={setTeamMembers1}
          />
        </div>
      </div>
      <div className="App-bg" id="section_3">
        <div className="roulette-container">
          <Form setTeam={setTeam2} next="section_4" time={2} />
        </div>
      </div>

      <div className="App-bg" id="section_4">
        <div className="roulette-container">
          <TeamList
            team={team2}
            next="section_5"
            setTeamMembers={setTeamMembers2}
          />
        </div>
      </div>
      <div className="App-bg" id="section_5">
        <div className="roulette-container">
          <Roulette
            teams={[teamMembers1, teamMembers2]}
            teamsInfo={[team1, team2]}
            setCouples={setCouples}
            couples={couples}
          />
        </div>
      </div>
      <div className="App-bg" id="section_6">
        <div className="roulette-container">
          <Summary couples={couples} />
        </div>
      </div>
    </div>
  );
}

export default App;
