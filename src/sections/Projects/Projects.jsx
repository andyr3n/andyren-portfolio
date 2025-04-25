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
                <p>Spots Map is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to mark locations on a map, leave reviews, and rate places.</p>
            </a>
            <a href="https://github.com/andyr3n/Broke-No-More" target="_blank">
                <img className="hover" src={brokenomore} alt="Broke-No-More logo" />
                <h3>Broke-No-More</h3>
                <p>A Kotlin-based finance app for students to manage budgets, savings, and subscriptions. Features an AI chatbot with OpenAI API for personalized financial tips.</p>
            </a>
        </div>
    </section>
  )
}

export default Projects