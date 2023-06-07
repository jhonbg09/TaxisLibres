import React from "react";
import  styles  from "./Nav.module.css";
import logo from '../../assets/image/logo-escritorio.webp'

function Nav() {
  return (
    <div className={styles.container}>
      <div>
        <a href="#home"><img src={logo} alt="logo nav"/></a>
      </div>
      <div className={styles.container_nav}> 
            <div className={styles.font}>
                <a href="#section1"><p>Presentacion</p></a>
            </div>
            <div className={styles.font}>
                <a href="#section2"><p>¿Que es?</p></a>
            </div>
            <div className={styles.font}>
                <a href="#form"><p>Formulario</p></a>
            </div>
            
      </div>
    </div>
  );
}

export default Nav;
