import { Link } from "react-router"
import styles from './Navbar.module.css'
import icon from '../../../src/assets/logo.png'



function HeaderNav(){
  return(
    <div className={styles.container}>
    <><nav className={`${styles.navContainerLeft} ${styles.text}`}>
      <div className={styles.logo}>
      <img src={icon} alt="logo soundwave" />
      </div>
      <Link className={styles.text} to={"/"}>Soundwave</Link>
    </nav><nav className={styles.navContainerRigth}>
        <Link className={styles.text} to={"/discover"}>Discover</Link>
        <Link className={styles.text} to={"/join"}>Join</Link>
      </nav></>
      </div>
  )
}

export default HeaderNav

