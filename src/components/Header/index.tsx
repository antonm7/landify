import styles from './Header.module.css'
import RoundedButton from '../common/RoundedButton'

import roundedArrow from '/public/roundedArrow.svg'
import girl from '/public/girl.svg'
import bring from '/public/bring.svg'
import HeaderShape from './HeaderShape'






export default function Header() {
    return (
        <div id={styles.header}>
            <div id={styles.headersContainer}>
                <h1 id={styles.h1}>
                Academy <br />
of Your Business
                </h1>
                <p id={styles.p}>Organizes work so teams know what to do, why it matters, and how to get it done.</p>
                <div id={styles.buttonsWrapper}>
                    <RoundedButton color={'black'} bg={'#FFB3A7'} title={'Get Started'}/>

                </div>
                <img src={roundedArrow} id={styles.roundedArrow}/>
               
                </div>
            <div id={styles.imagesContainer}>
                <div id={styles.sixK}>
                        <p id={styles.sixK_title}>6K</p>
                        <p id={styles.sixK_subTitle}>Clients</p>
                    </div>
                <img src={girl} id={styles.girl}/>
                <div id={styles.bring}>
                    <img id={styles.bringImage} src={bring}/>
                    <p id={styles.bringTitle}>Bring your ideas to life</p>
                </div>
                <div id={styles.market}>
                    <p id={styles.market_title}>40%</p>
                    <p id={styles.market_subTitle}>Market</p>
                </div>
                <div id={styles.blackBg}>
                    <HeaderShape />
                </div>
            </div>
        </div>
    )
}