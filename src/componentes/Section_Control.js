import React from 'react'
import "../css_stylos/menu_informativo.css"
import Instrucciones from "./Instrucciones";
export default function Section_Control() {
  return (
    <div>
      
      
      <section class="py-5 text-center container menos-padding-booton">
        <div class="row py-lg-5 ">
          <div class="col-lg-6 col-md-8 mx-auto ">
            <div className="titulo-container image-filter-titulo">
              <h1 class="fw-light titulo-container ">
                Bienvenido a la Plataforma de Control de Turnos
              </h1>
              <div>
                <h3>
                  <strong>(MORENO)</strong>
                </h3>
              </div>
            </div>
            <div className="info-container">
              <p class="lead text-body-secondary">
                Para garantizar un proceso de cierre de turno eficiente y
                ordenado, hemos desarrollado esta plataforma exclusiva para
                nuestros colaboradores. Aquí podrás acceder a los formularios de
                cierre de turno correspondientes a tu centro de distribución de
                una manera rápida y sencilla.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Instrucciones />
    </div>
  );
}
