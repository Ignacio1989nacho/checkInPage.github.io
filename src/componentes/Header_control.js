import React from 'react'

export default function Header_control() {
  return (
    <div>
      <header data-bs-theme="dark">
        <div class="collapse text-bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4>GRUPO L (Moreno)</h4>
                <p class="text-body-secondary">
                  El Centro de Distribución de Moreno del Grupo L se encuentra
                  en el Parque Industrial del Buen Ayre . Este centro abarca
                  una superficie total de 11.500 m², divididos en 3 naves.
                  Cada nave está diseñada para optimizar la eficiencia en la
                  distribución y almacenamiento de productos, asegurando la
                  entrega oportuna y de alta calidad a sus clientes.
                </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4>Contactos y Redes</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="text-white">
                      Human
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
             
              <strong>CONTROL DE TURNOS</strong>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
