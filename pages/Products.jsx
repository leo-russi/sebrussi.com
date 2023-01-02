import { Fragment } from 'react'
import locale from '../localeData/ProductsLoc'
import styles from '../styles/products.module.css'

const Products = ({lang}) => {

    const lc = locale[lang]
    return (<div className={styles.products} style={{textAlign:'center', color:'#e0e0e0',backgroundColor:'#000'}}>
                <h1>{lc.title}</h1>
                <div style={{padding:10, fontWeight:'bold', fontSize: 32}}>START COMFORTABLE.</div>
                <div style={{padding:10, fontWeight:'bold', fontSize: 32}}>GET FITTER AND STRONGER.</div>
                <div style={{padding:40, display:'flex', flexDirection:'column', justifyContent:'center',flexWrap:'wrap', minHeight:500}}>
                    <div style={{flex:1, paddingTop: 40}}>
                        <div style={{padding:10, textAlign:'center'}}>
                        Visit <img src="/images/logo-crop.jpg" style={{width: 100}} /> Apparel <br/>on Instagram and Facebook
                        </div>
                        <div style={{padding:10, textAlign:'center', display:'flex', justifyContent:'center'}}>
                            <a href="https://www.instagram.com/sebrussiAPPAREL/" target="_blank" rel="noreferrer noopener" aria-label="instagram" style={{flex:1,color: '#000', display:'flex', justifyContent:'flex-end'}}>
                                <img src="/images/ig_white.svg" style={{width: 36, height: 36, marginRight: 15}} />
                            </a>
                            <a href="https://www.facebook.com/SebRussiAPPAREL/" target="_blank" rel="noreferrer noopener" aria-label="facebook" style={{flex:1,color: '#000', display:'flex', justifyContent:'flex-start'}}>
                                <img src="/images/fb_white.png" style={{width: 36, height: 36, marginLeft: 15}} />
                            </a>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <p style={{fontWeight: 500, fontSize: '1.25rem'}}>If interested, drop me an email to</p>
                        <a className="btn btn-light font-weight-bold" href="mailto:apparel@sebrussi.com" style={{color: '#000', minWidth: 120}}>apparel@sebrussi.com</a>
                    </div>
                </div>
            </div>)
}

export default Products