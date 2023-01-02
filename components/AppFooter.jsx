import React from 'react'
import NavLink from 'next/link'
import locale from './AppFooterLoc.js'

const AppFooter = ({lang}) => {      
     
    const lc = locale[lang]
                    return (
                        <footer className="seb-footer" >
                                {/*<hr/>*/}
                                <div className="seb-footer-grid" >

                                    {/* <div className="seb-footer-support">
                                        <div className="seb-footer-caption">{lc['support']}</div>
                                        <ul>
                                            <li><NavLink href={`/${lang}/Support`} >{lc['supportuser']}</NavLink></li>
                                            <li><NavLink href={`/${lang}/Faq`} >{lc['faq']}</NavLink></li>
                                        </ul>
                                    </div> */}
                                    <div className="seb-footer-terms">
                                        <div className="seb-footer-caption">{lc['terms']}</div>
                                        <ul>
                                            <li><NavLink href={`/${lang}/Terms`}>{lc['termslink']}</NavLink></li>
                                            <li><NavLink href={`/${lang}/Privacy`}>{lc['policylink']}</NavLink></li>
                                            <li><NavLink href={`/${lang}/Returns`}>{lc['returnslink']}</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="seb-footer-company">
                                        <div className="seb-footer-caption">{lc.company}</div>
                                        <ul>
                                            <li><NavLink href={`/${lang}/About`} >{lc['about']}</NavLink></li>
                                            <li><NavLink href={`/${lang}/Contact`} >{lc['contact']}</NavLink></li>
                                            <li><NavLink href={`/${lang}/Workwithus`} >{lc['workwithus']}</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="seb-footer-follow">
                                        <div className="seb-footer-caption">{lc.follow}</div>
                                        <div className="seb-footer-social">
                                            <a href="https://www.instagram.com/sebrussi/" target="_blank" rel="noreferrer noopener" style={{color:'inherit'}} aria-label="instagram"><img src="/images/ig_white.svg" ></img></a>
                                            <a href="https://www.facebook.com/SebRussiFitness/" target="_blank" rel="noreferrer noopener" style={{color:'inherit'}} aria-label="facebook"><img src="/images/fb_white.png" ></img></a>
                                            <button id="MyBtnAddToScreen" style={{display:'none'}}>Add to Home</button>
                                        </div>
                                    </div>
                                    <div className="seb-footer-copy">
                                        <div>© 2019-{new Date().getFullYear()} Sebastian Russi - P. IVA 10053980966</div>
                                    </div>

                                </div>
                        </footer>
                    )
    
}

export default AppFooter 