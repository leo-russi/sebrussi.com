import NavLink from 'next/link'
import locale from '../localeData/AppBannerLoc'
import { useState, useEffect } from 'react';

// banner for cookie policy
const AppBanner = ({lang}) => {

    const [banner, setCookie] = useState(false);

    const setConsentCookie = () => {
        let newvalue = `sebrussiconsent=ok; path=/; expires=${new Date(Date.now()+(180*24*60*60000)).toUTCString()}`
        document.cookie = newvalue
        setCookie(false)
    }

    useEffect(()=>{
        if(window){
            if(document.cookie.split(';').filter(c => c.includes('sebrussiconsent')).length){
                // do nothing
                //setCookie(false)
            }
            else{
                // show banner
                let nl = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
                let l = nl.toLowerCase().substr(0,2)
                let cl = {}
                if(l.includes('fr') || l.includes('it')){ cl = {currentLocale: l} }
                setCookie(true)
            }
        }
    })

    let lc = locale[lang]

    let bannerStyle = {
        position:"fixed", 
        bottom:0, 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        padding:'10px 20px 10px 20px', 
        textAlign:'center', 
        height:120, 
        width: '100%', 
        color:'#000', 
        backgroundColor:'rgb(236,236,236, 1)'}
   
    return ( banner && <div style={bannerStyle}>
        <div>{lc.text[0]}<NavLink href={`/${lang}/terms`}>{lc.text[1]}</NavLink>{lc.text[2]}<NavLink href={`/${lang}/privacy`}>{lc.text[3]}</NavLink>.<span>&nbsp;&nbsp;&nbsp;</span>
        <button className="btn btn-danger" onClick={()=>setConsentCookie(true)}>{lc.btn}</button></div> 
    </div>)
      
}

export default AppBanner