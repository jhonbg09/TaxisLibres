import React from "react";
import styles from "../Footer/Footer.module.css";
import img1 from "../../assets/patrocinado/logo-ansv.webp";
import img2 from "../../assets/patrocinado/logo-secmovilidad.webp";
import img3 from "../../assets/patrocinado/logo-superindycom (1).webp";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.section_contact}>

        <div className={styles.servicios}>
          <h2>Servicios</h2>
          <ul>
            <li>Viajeros</li>
            <li>Conductores</li>
            <li>Propietarios</li>
            <li>Empresas</li>
          </ul>
        </div>

        
        <div className={styles.contactanos}>
          <h2>Contactanos</h2>
          <div>
            <p>
              Sede principal Av. de las Américas #50-15 Centro Comercial Carrera
              (601) 420 2600 Bogotá D.C. Colombia
            </p>
          </div>
        </div>

      </div>
      <div className={styles.container_images}>
        <img src={img1} alt="logo-1" />
        <img src={img2} alt="logo-2" />
        <img src={img3} alt="logo-3" />
      </div>

    </div>
  );
}

export default Footer;
