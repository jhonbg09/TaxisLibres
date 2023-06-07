
import styles from "./Presentation.module.css";
// import img2_Presentation from "../../assets/image/Difundir-hackathon-online-Hackathon-Spain.jpg";
import img1_Presentation from "../../assets/image/tecnology.png";
//Components
import Video from "../Video/Video";


function Presentation() {


  return (
    <div className={styles.container_presentation}>
      <section className={styles.container_text}>
        <h1>
          "Conectando tecnología y transporte: Hackathon Taxis Libres impulsa la
          evolución de los taxis como tendencia."
        </h1>
        <div className={styles.container_text_img}>
          <section className={styles.section_text}>
            <p>
              El evento más emocionante del año está aquí, y tú eres parte
              fundamental de esta experiencia de innovación y creatividad. El
              Hackathon 2023 te invita a unirte a una comunidad global de mentes
              brillantes y apasionadas por la tecnología, dispuestas a
              transformar el mundo de la movilidad.
            </p>
          </section>

          <section>
            <div className={styles.container_img}>
              <img className={styles.img1} src={img1_Presentation} alt="img1" />
            </div>
          
          </section>
        </div>
      </section>

      <Video />

    </div>
  );
}

export default Presentation;
