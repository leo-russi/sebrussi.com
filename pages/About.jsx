import locale from '../localeData/AboutLoc'
import style from '../styles/about.module.css'

const About = ({lang}) => {

    const lc = locale[lang]
    return (
        <>
                
                <div className={style.leftDiv} >
                    {/* <img className={style.sebiImg} src={img} /> */}
                    <picture>
                        {/* <source media="(min-aspect-ratio: 12/17)" srcSet="/images/about4-2.jpg" /> */}
                        <source media="(min-aspect-ratio: 12/17)" srcSet="/images/letsworkout3.jpg" />
                        {/* <img className={style.sebiImg} src="/images/letsworkout-2.jpg" alt="about page image" /> */}
                        <img className={style.sebiImg} src="/images/letsworkout4.jpg" alt="about page image" />
                    </picture>
                </div>
                <div className={style.rightDiv} >
                    <div className={style.motto}>
                        <div className={style.letsWorkout}>Let's workout!</div>
                        <div className={style.letsWorkout + ' ' + style.letsWorkoutTitle} >{lc.about}</div>
                    </div>
                    <div className={style.about}>
                        <div className={style.innerAbout} >
                            <div style={{border:'0px solid white', display:'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', width:'100%'}}>
                                <div style={{ height: 700}}>
                                    <figure style={{width: 320, height: 600, margin:'auto'}}>
                                        <img src="/images/sebi-about3.jpg" alt="Sebastian" style={{width: 320, height: 'auto'}}/>
                                        <figcaption>
                                            <h3>Sebastian Russi</h3>
                                            <p style={{paddingLeft:10, paddingRight:10}}>{lc.sebastian}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                                {/* <div style={{height: 700}}>
                                    <figure style={{width: 320, height: 600, margin:'auto'}}>
                                        <img src="/images/partner-about.jpg" alt="partner" style={{width: 320, height: 'auto'}} />
                                        <figcaption>
                                            <h3>Nome e Cognome</h3>
                                            <p style={{paddingLeft:10, paddingRight:10}}>{lc.partner}</p>
                                        </figcaption>
                                    </figure>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                </div>

        </>
    )
}

export default About