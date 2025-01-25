import React from 'react'
import "../css_stylos/estilo-botones.css";
export default function BotonesTurnos({onButtonClick }) {
  return (
    <div>
      <p>
        <button
          className="btn btn-warning my-2 mx-1"
          onClick={() => onButtonClick("mañana")}
        >
          TURNO MAÑANA
        </button>
        <button
          className="btn btn-info my-2  mx-1"
          onClick={() => onButtonClick("tarde")}
        >
          TURNO TARDE
        </button>
        <button
          className="btn btn-dark my-2 mx-1"
          onClick={() => onButtonClick("noche")}
        >
          TURNO NOCHE
        </button>
      </p>
    </div>
  );
}
