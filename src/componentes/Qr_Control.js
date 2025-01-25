import React from 'react'
import Iframe_Control from './Iframe_Control';
import "../css_stylos/tamanio_imagen_qr.css";
export default function Qr_Control({ turno }) {
  return (
    <div>
      <div className="album py-5 image-filter">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {(turno === "mañana" || turno === "tarde" || turno === "noche") && (
              <div className="col">
                <div className="card shadow-sm">
                  <h2 className="card-text">CENTRO DE DISTRIBUCION N°1</h2>
                  <Iframe_Control />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {(turno === "mañana" || turno === "tarde") && (
              <div className="col">
                <div className="card shadow-sm">
                  <h2 className="card-text">CENTRO DE DISTRIBUCION N°2</h2>
                  <Iframe_Control />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {turno === "mañana" && (
              <div className="col">
                <div className="card shadow-sm">
                  <h2 className="card-text">CENTRO DE DISTRIBUCION N°3</h2>{" "}
                  <Iframe_Control />{" "}
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
