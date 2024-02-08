import styles from '../SobreMi/SobreMi.module.css'
import Animacion from '../Animacion/Animacion.jsx' 
import perfil from '../assets/perfil.svg'
import yo from '../assets/Fullstack-Developer.webp'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            <article className={styles.left}>
                <div className={styles.intro}>
                    <div className={styles.img}>
                        <img src={yo} alt="" />
                    </div>
                    <p>Hola, Me llamo  <span>F</span>ranco <span>N</span>ahuel <span>P</span>erez.Soy un Full Stack Developer con background en actividades relacionadas a la tecnología y a la atención al cliente, trabajando en una ferretería, lo cual me ayudó la empatía, la colaboración en equipo y orientarme a alcanzar a los objetivos.
Especializado en Back-end. Conocimientos en Javascript, React, Redux, Express.js, Node.js, CSS, HTML, PostgreSQL. Soy una persona con alto nivel de relacionamiento, comunicación, dedicación y empatía.</p>
                    <div className={styles.adornos}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </article>

            <article className={styles.center}>
                <Animacion/>
            </article>

            <article className={`${styles.edu} ${styles.right}`}>
                <h2>Educación</h2>

                <div>
                    <h3>Soy Henry</h3>
                    <h4>Abril 2023 - Octubre 2023</h4>
                </div>

                <div>
                    <h3>DevTalles</h3>
                    <h4>TypeScript, Node</h4>
                </div>

                <div>
                    <h3>FreeCodeCamp</h3>
                    <h4>Javascript</h4>
                </div>
            </article>
        </section>
    )
}

export default SobreMi;
