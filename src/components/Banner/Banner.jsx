import React from "react";
import styles from "./Banner.module.css";
import banner from '../../assets/image/banner-prueba.png'
function Banner() {
  return (
    <div className={styles.container_banner}>
     <img className={styles.img_banner} src={banner} alt='img-banner'/>
    </div>
  );
}

export default Banner;
