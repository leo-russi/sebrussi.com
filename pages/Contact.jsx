import locale from '../localeData/ContactLoc'
import style from '../styles/contact.module.css'

const Contact = ({lang}) => {
    const lc = locale[lang]
    return  (
        <>
                    <div className={style.leftDiv} >
                        {/* <img className={style.sebiImg} src={img}  /> */}
                        <picture>
                            {/* <source media="(min-aspect-ratio: 12/17)" srcSet="/images/about3-1.jpg" /> */}
                            <source media="(min-aspect-ratio: 12/17)" srcSet="/images/contact_n2_desk.jpg" />
                            {/* <source media="(min-aspect-ratio: 12/17)" srcSet="/images/lestworkout4.jpg" /> */}
                            {/* <img className={style.sebiImg} src="/images/letstalk3.jpg" alt="contact page image" /> */}
                            <img className={style.sebiImg} src="/images/contact_n.jpg" alt="contact page image" />
                            {/* <img className={style.sebiImg} src="/images/lestworkout3.jpg" alt="contact page image" /> */}
                        </picture>
                    </div>
                    <div className={style.rightDiv}>
                        <div className={style.motto}>
                            <div className={style.letsTalk}>Let&apos;s talk</div>
                            <div className={style.letsTalkEmail} >contact@sebrussi.com</div>
                        </div>
                        <div className={style.contact}>
                            <div className={style.innerContact}>
                                <div className={style.keepInTouch} >{lc.follow}</div>
                                <div className={`${style.keepInTouch} ${style.keepInTouchSmaller}`} >
                                    <a href="https://www.instagram.com/sebrussi/" target="_blank" rel="noreferrer noopener" style={{color:'#fff'}} aria-label="instagram"><img src="/images/ig_white.svg" style={{width:36, height:36, marginRight:30}}></img></a>
                                    <a href="https://www.facebook.com/SebRussiFitness/" target="_blank" rel="noreferrer noopener" style={{color:'#fff'}} aria-label="facebook"><img src="/images/fb_white.png" style={{width:36, height:36, marginRight:30}}></img></a>
                                </div>
                                <div className={style.keepInTouch} >Visit <img src="/images/logo-crop.jpg" style={{width:100}} /> Apparel</div>
                                <div className={`${style.keepInTouch} ${style.keepInTouchSmaller}`} >
                                    <a href="https://www.instagram.com/sebrussiAPPAREL/" target="_blank" rel="noreferrer noopener" style={{color:'#fff'}} aria-label="instagram"><img src="/images/ig_white.svg" style={{width:36, height:36, marginRight:30}}></img></a>
                                    <a href="https://www.facebook.com/SebRussiAPPAREL/" target="_blank" rel="noreferrer noopener" style={{color:'#fff'}} aria-label="facebook"><img src="/images/fb_white.png" style={{width:36, height:36, marginRight:30}}></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
}

export default Contact