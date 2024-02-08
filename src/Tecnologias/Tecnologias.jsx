import React from 'react'
import styles from "../Tecnologias/Tecnologias.module.css";
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


export default function Tecnologias() {
  return (
    <div>
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
  )
}
