import React from 'react'
import qrImage from "../imagenes/qr.png"
import "../css_stylos/tamanio_imagen_qr.css"
export default function Iframe_Control() {
     const handleClick = () => {
       window.location.href = "https://forms.office.com/r/EVUgxp9c8k";
     };
  return (
    <div className="image-container ">
      <img
        src={qrImage}
        alt="QR"
        className="overlay-image "
        onClick={handleClick}
      />
    </div>
  );
}
