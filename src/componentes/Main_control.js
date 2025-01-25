import React, { useState } from "react";
import Section_Control from './Section_Control';
import Qr_Control from './Qr_Control';
import BotonesTurnos from "./BotonesTurnos";
export default function Main_control() {
  const [turno, setTurno] = useState("");
  const handleClick = (nuevoTurno) => {
    setTurno(nuevoTurno);
  };
  return (
    <div>
      <main>
        <Section_Control />
        <BotonesTurnos onButtonClick={handleClick} />
        <Qr_Control turno={turno} />
      </main>
    </div>
  );
}
