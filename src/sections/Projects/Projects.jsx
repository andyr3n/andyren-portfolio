import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectContainer}>
            <a href="https://github.com/andyr3n/DDMap" target="_blank">
                <img className="hover" src={viberr} alt="DDMap logo" />
                <h3>DDMap</h3>
                <p>DDMap is a mobile app that helps delivery drivers efficiently mark and share key locations like building numbers, entrances, and washrooms, with features for adding markers, descriptions, and ratings to improve navigation.</p>
            </a>
        </div>
    </section>
  )
}

export default Projects