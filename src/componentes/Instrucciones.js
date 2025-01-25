import React from 'react'

export default function Instrucciones() {
  return (
    <div>
      <div className="instructions py-5 text-center container ">
        <strong>Instrucciones:</strong>
        <ul>
          <li>
            Selecciona el turno correspondiente: Selecciona un turno en la
            botonera para ver los códigos QR.
          </li>
          <li>
            Escanea el código QR: Al escanear el código QR con tu celular, serás
            redirigido al formulario de cierre de turno.
          </li>

          <li>
            Haz Click en la Imagen QR: Al hacer click, serás redirigido al
            formulario de cierre de turno
          </li>
          <li>
            Completa el Formulario: Rellena todos los campos requeridos de forma
            precisa y completa
          </li>
          <li>
            Envía el Formulario: Asegúrate de enviar el formulario para que tu
            cierre de turno sea registrado correctamente
          </li>
          <li>
            Para cualquier duda o inconveniente, no dudes en contactarnos a
            través de nuestros canales de soporte. ¡Gracias por tu cooperación!
          </li>
        </ul>
      </div>
    </div>
  );
}
