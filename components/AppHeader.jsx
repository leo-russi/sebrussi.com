import React, { Component } from 'react'
import NavLink from 'next/link'
import h from '../styles/header.module.css'
import locales from '../localeData/locales.json'
import { useRouter } from 'next/router'

const AppHeader = ({lang}) => {

        const router = useRouter()
        const lc = locales.header[lang]

        //fake
        function $(selector){
            return {
                collapse: function(style){}
            }
        }

        const isBrowser = () => typeof window !== 'undefined';
        const changeLang = (p)=>{ if(isBrowser()) {
          let reg = /^\/(fr|en|it)\/?/ig
          //let newpathname = window.location.pathname.replace(reg, `/${p}/`)
          let newpathname = window.location.pathname.replace(reg, "")
          console.log(`${newpathname}`)
          router.push(`${newpathname}`, `${newpathname}`, { locale: p })
          //router.push('/', '/', { locale: p })
        }}

        return (

            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark ${h.navBg}`}>
                <a className="navbar-brand" href={`/${lang}`}>
                    <img className="logo" src="/images/logo-crop.jpg" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto" onClick={e =>{ $('#navbarNav').collapse('hide') }}>
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item" ><NavLink className="nav-link my-header" href={`/${lang}/Services`}>{lc['services']}</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link my-header" href={`/${lang}/Products`}>{lc['products']}</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link my-header" href={`/${lang}/About`}>{lc['about']}</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link my-header" href={`/${lang}/Contact`}>{lc['contact']}</NavLink></li>
                    </ul>
                    <ul className="navbar-nav" onClick={e =>{ $('#navbarNav').collapse('hide') }}>
                    </ul>
                    <div>
                        <ul className="nav" onClick={e =>{ $('#navbarNav').collapse('hide') }}>
                            <li className="nav-item" >
                                <i className={`fa fa-language fa-lg ${h.langIcon}`} ></i>
                            </li>
                            <li className="nav-item" >
                                <a className={`nav-link ${h.lang} ${lang=='en' ? h.active : ''}`} onClick={()=>changeLang('en')}>EN</a>
                            </li>
                            <li className="nav-item" >
                                <a className={`nav-link ${h.lang} ${lang=='fr' ? h.active : ''}`} onClick={()=>changeLang('fr')}>FR</a>
                            </li>
                            <li className="nav-item" >
                                <a className={`nav-link ${h.lang} ${lang=='it' ? h.active : ''}`} onClick={()=>changeLang('it')}>IT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
        
}

export default AppHeader