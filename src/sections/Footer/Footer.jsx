import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>© 2024 Andy Ren. <br />All rights reserved.</p>
    </section>
  );
}

export default Footer;