import React from "react";
import styles from "./Benefits.module.css";
import oro from "../../assets/image/oro.avif";
import plata from "../../assets/image/medalla-plata-2do-lugar-plata_87720-2497.avif";
import bronce from "../../assets/image/bronce.jpeg";

function Benefits() {
  return (
    <div className={styles.container_principal}>
      <section className={styles.container_section}>
        <div className={styles.container_text_hackaton}>
          <div>
            <h1>¿Por qué participar en el Hackathon Taxis Libres?</h1>
          </div>

          <div>
            <p>
              Participar en el Hackathon Taxis Libres no solo te brinda una
              oportunidad emocionante para mostrar tu talento y creatividad,
              sino que también ofrece incentivos atractivos para los equipos que
              se destaquen. Aquí te presento los motivos por los que debes
              participar en este hackathon y apuntar a uno de los tres primeros
              puestos:
            </p>
          </div>
        </div>

        <section className={styles.container_cards}>
          <div className={styles.card}>
            <img className={styles.medalls} src={oro} alt="oro" />
            <h3>1er puesto</h3>
            <ul>
              <li>
                Premio en efectivo de 10,000 USD para impulsar tu proyecto y
                llevarlo al siguiente nivel.
              </li>
              <li>
                Dispositivos electrónicos de última generación para todo el
                equipo.
              </li>
              <li>
                Oportunidad de colaboración exclusiva con empresas líderes en la
                industria de la movilidad.
              </li>
              <li>
                Reconocimiento público como el equipo ganador del Hackathon
                Taxis Libres 2023.
              </li>
              <li>
                Acceso a un programa de aceleración empresarial para ayudarte a
                llevar tu proyecto al mercado de manera exitosa.
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <img className={styles.medalls} src={plata} alt="plata" />
            <h3>2do puesto</h3>
            <ul>
              <li>
                Premio en efectivo de 5,000 USD para invertir en tu proyecto y
                seguir desarrollándolo.
              </li>
              <li>Dispositivos electrónicos para todo el equipo.</li>
              <li>
                Oportunidad de establecer conexiones con patrocinadores y
                líderes de la industria.
              </li>
              <li>
                Reconocimiento público como uno de los equipos destacados en el
                Hackathon Taxis Libres 2023.
              </li>
              <li>
                Acceso a recursos y mentoría para apoyar la evolución de tu
                proyecto.
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.card}>
          <img className={styles.medalls} src={bronce} alt="bronce" />
          <h3>3er puesto</h3>
          <ul>
            <li>
              Premio en efectivo de 2,000 USD para respaldar el desarrollo
              continuo de tu proyecto.
            </li>
            <li>Dispositivos electrónicos para todo el equipo.</li>
            <li>
              Oportunidad de networking con profesionales y expertos del sector
              de la movilidad.
            </li>
            <li>
              Reconocimiento público como uno de los equipos sobresalientes en
              el Hackathon Taxis Libres 2023.
            </li>
            <li>
              Posibilidad de recibir orientación para la implementación y
              escalabilidad de tu proyecto.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
