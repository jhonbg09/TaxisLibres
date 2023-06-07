import React from "react";
import styles from "./Form.module.css";
import logo from "../../assets/image/logo-escritorio.webp";
function Form() {
  return (
    <div className={styles.container_form}>
      {/* <div> */}
        <h2 id="form">Formulario de Inscripción Para Evento</h2>
        <h3>Hackaton</h3>
        <form>
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div className={styles.label_inputs}>
            <label>Nombre(s)* </label>
            <input type="text" placeholder="Escriba su respuesta" />

            <label>Apellido(s)*</label>
            <input type="text" placeholder="Escriba su respuesta" />

            <label>
              Tipo de Documento
              <select>
                <option value="opcion1">-Seleccione-</option>
                <option value="opcion2">Cedula de Ciudadania</option>
                <option value="opcion3">Pasaporte</option>
                <option value="opcion4">Tarjeta de Identidad</option>
              </select>
            </label>

            <label>Número de documento de identidad *</label>
            <input type="cc" placeholder="Solo numeros" />

            <label>Correo electronico de contacto *</label>
            <input type="email" placeholder="correo@mail.com" />

            <label>Confirme su correo electronico de contacto *</label>
            <input type="cc" placeholder="correo@mail.com" />

            <label>Telefono de contacto *</label>
            <input type="cc" placeholder="Solo numeros" />
          </div>
          <div className={styles.button_form}>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    // </div>
  );
}

export default Form;
