import styles from './Footer.module.css'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'

function Footer() {
  return (
  

      <footer className={styles.footer}>
      <div className={styles.about}>
        <p>About us</p>
        <p>Contact</p>
        </div>
        <div className={styles.social}>
        <div className={styles.twitter}>
          <img src={twitter} alt="Logo Twitter" />
          <p>Twitter</p>
        </div>
        <div className={styles.facebook}>
          <img src={facebook} alt="Logo Facebook" />
          <p>Facebook</p>
        </div>
        </div>
      </footer>
   


  );
}       

export default Footer;   
