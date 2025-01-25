import React from 'react'
import "../css_stylos/menu_informativo.css";
export default function Footer_Control() {

 const fechaHoy = new Date();
 const dia = fechaHoy.getDate();
 const mes = fechaHoy.getMonth() + 1; // Los meses empiezan desde 0
 const anio = fechaHoy.getFullYear();
  return (
    <div>
      <footer class="text-body-secondary py-5">
        <div class="container">
          <p class="float-end mb-1">
            <p class="float-end mb-1">
              <a href="#" class="arrow-up">
                <i class="fas fa-arrow-up" aria-hidden="true"></i>
              </a>
            </p>
          </p>
          <div className="color-fecha">
            <p class="mb-0 ">
              <strong>
                {dia}/{mes}/{anio}
              </strong>
              <p>© {anio} dipardodev.</p>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
