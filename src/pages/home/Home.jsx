import styles from './Home.module.css'
import landingGirl from '../../assets/landing-page-girl.png'
import HeaderNav from '../../components/navbar/Navbar'
import JoinNow from '../../components/buttons/Join-now'

function Home () {

return (
    <>
    <HeaderNav/>

    <div className={styles.homeCard}>

    <div className={styles.imageContainer}>
        <img className={styles.girlImg} src={landingGirl}/>
    </div>
        
    <div className={styles.circleTop}></div>

    <div className={styles.textButtonCard}>

        <h1 className={styles.titlePageOne}>Feel the Music</h1>

        <p className={styles.textPageOne}>Stream over 20 thousand songs with one click</p>
        
        <JoinNow/>

    </div>

    <div className={styles.circleBottomLeft}></div>

    <div className={styles.circleBottomRight}></div>

</div>
</>
)

}

export default Home