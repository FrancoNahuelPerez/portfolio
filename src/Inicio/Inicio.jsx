import styles from "../Inicio/Inicio.module.css";
import Animacion from "../Animacion/Animacion";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import dogs2 from "../assets/dogs2.webp";
import dogs from "../assets/dogs2.webp";
import food from "../assets/food.webp";
import xul from "../assets/xul.webp";
import psql from "../assets/psql.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import redux from "../assets/redux.svg";
import typescrit from "../assets/typ.svg";
import url from "../assets/url.svg";

const Inicio = () => {
  return (
      <section className={styles.Inicio}>
        <article className={styles.full}>
          <h1>Full Stack Web Developer</h1>
          <p>
            Programador con enfoque en el desarrollo de aplicaciones web, tengo
            habilidades tanto en el Back-end como en el el Front-end. sin
            embargo mi especialidad y enfoque principal está en el Back-end.
          </p>
          <div className={styles.adornos}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.servicios}>
            <h2>Tecnologias</h2>
            <div className={styles.habi}>
              <div>
                <img src={html} alt="logo html" />
                <h5>HTML</h5>
              </div>

              <div>
                <img src={css} alt="logo css" />
                <h5>CSS</h5>
              </div>

              <div>
                <img src={tailwind} alt="logo tailwind" />
                <h5>TAILWIND</h5>
              </div>

              <div>
                <img src={js} alt="logo js" />
                <h5>JAVASCRIPT</h5>
              </div>

              <div>
                <img src={node} alt="logo node" />
                <h5>NODE</h5>
              </div>

              <div>
                <img src={express} alt="logo express" />
                <h5>EXPRESS</h5>
              </div>

              <div>
                <img src={react} alt="logo react" />
                <h5>REACT</h5>
              </div>

              <div>
                <img src={typescrit} alt="logo" />
                <h5>TYPESCRIT</h5>
              </div>

              <div>
                <img src={psql} alt="logo" />
                <h5>PostgreSQL</h5>
              </div>

              <div>
                <img src={redux} alt="logo Redux" />
                <h5>REDUX</h5>
              </div>
            </div>
          </div>
        </article>

        <div className={styles.botones}>
          <h2>Franco Nahuel Perez</h2>
          <div>
            <a href="mailto:francarp001@gmail.com" target="_blank">
              GMAIL
            </a>
            <a
              href="https://drive.google.com/file/d/1zOWsVBjgGGsUhCRUHvu96CIbGjVHPo4b/view?usp=drive_link"
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>

        <Animacion />
      </section>

  );
};

export default Inicio;
