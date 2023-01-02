import Link from 'next/link'
import style from '../styles/home.module.css'
import locale from '../localeData/HomeLoc.js'


export default function sebiHome({lang}){

    const loc = locale[lang]
    return (
        <>
                <div className={style.leftDiv}>
                    {/* <img className={style.sebiImg} src={img} /> */}
                    <picture>
                        <source media="(min-aspect-ratio: 17/10) and (min-width:1280px)" srcSet="/images/youvsyou1310-1710.jpg" />
                        <source media="(min-aspect-ratio: 13/10) and (min-width:1280px)" srcSet="/images/youvsyou1310-1710.jpg" />
                        <source media="(min-aspect-ratio: 13/10) and (min-width:1024px)" srcSet="/images/youvsyou1310-1710.jpg" />
                        {/* mobile */}
                        <source media="(min-aspect-ratio: 12/17)" srcSet="/images/youvsyou-1217.1.jpg" />
                        <img className={style.sebiImg} src="/images/youvsyou1781x1781.jpg" alt="home page image" />
                    </picture>
                </div>
                <div className={style.rightDiv} >
                    <div className={style.motto}>
                        <div className={style.lookAhead}>{loc.slogan}</div>
                    </div>
                    <div className={style.home} style={{minHeight:400}}>
                        <div className={style.innerHome}>
                            <div className="card bg-dark text-white" >
                                <img className="card-img" src="/images/training.jpg" style={{width:'180px', height:'auto'}} alt="personal training" />
                                <div className="card-img-overlay" >
                                    <h5 className="card-title">{loc.training}</h5>
                                    <p className="card-text">{loc.trainingMsg}</p>
                                    <p className="card-text getStartedText"><Link href={`/${lang}/services`}>{loc.btnGetStarted}</Link></p>
                                </div>
                            </div>
                            <div className="card bg-dark text-white" >
                                <img className="card-img" src="/images/apparel-B.jpg" style={{width:'180px', height:'auto'}} alt="apparel products" />
                                <div className="card-img-overlay" >
                                    <h5 className="card-title">{loc.apparel}</h5>
                                    <p className="card-text">{loc.apparelMsg}</p>
                                    <p className="card-text getStartedText"><Link href={`/${lang}/products`}>{loc.btnGetComfortable}</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}