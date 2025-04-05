import styles from './ProjectStyles.module.css';
import ddmap from '../../assets/ddmap.png';
import brokenomore from '../../assets/brokenomore.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectContainer}>
            <a href="https://github.com/andyr3n/Spots-Map" target="_blank">
                <img className="hover" src={ddmap} alt="DDMap logo" />
                <h3>Spots Map</h3>
                <p>Interactive Location Sharing</p>
            </a>
            <a href="https://github.com/andyr3n/Broke-No-More" target="_blank">
                <img className="hover" src={brokenomore} alt="Broke-No-More logo" />
                <h3>Broke-No-More</h3>
                <p>Android app designed to help students manage their finances with ease!</p>
            </a>
        </div>
    </section>
  )
}

export default Projects