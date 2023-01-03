import {Fragment} from 'react'
import Link from 'next/link'
import locale from '../localeData/WorkwithusLoc'
import styles from '../styles/services.module.css'

const Workwithus = ({lang}) => {

    let lc = locale[lang]

    let iStyle = {fontSize:'1.8rem', verticalAlign:'middle', paddingRight:12}
    let inpStyle ={maxWidth:250, display:'inline-block'}
    const onChange = ()=>{}

    return (
        <div className={styles['services']} >
            <h1>{lc.title}</h1>
            {
                lc.cards.map((item, i) => {
                    return <Fragment key={`c-${i}`}>
                    <div className={styles['service-card']} >
                        <div className={styles['service-img']} ><img src={item.img} style={{borderWidth:1, borderColor:'#fff', borderStyle:'solid'}} /></div>
                        <div className={styles['service-info']}>
                            <div className={styles['service-name']} >
                                <h1>{item.h1}</h1>
                                <h2>{item.h2}</h2>
                                <p className={styles['service-code']}>&nbsp;</p>
                                {
                                    item.desc.map( (desc, d) =>{
                                       return( <p key={`d-${i}-${d}`} className={styles['service-desc']}>{desc}</p>)
                                    })
                                }
                                <p>&nbsp;</p>
                                <h2>{item.details.header}</h2>
                                <p className={styles['service-desc']} style={{fontSize:'1.2rem'}}>{item.details.desc[0]}</p>
                                <p className={styles['service-desc']} style={{fontSize:'1.2rem'}}>{item.details.desc[1].split('|')[0]}<Link href={`/${lang}/AmbassadorTerms`}>{item.details.desc[1].split('|')[1]}</Link></p>
                                <p className={styles['service-desc']} style={{fontSize:'1.2rem'}}>{item.details.desc[2]}</p>
                                <p className={styles['service-desc']} style={{fontSize:'1.2rem'}}>{item.details.desc[3]}</p>
                                <p className={styles['service-desc']} style={{fontSize:'1.2rem'}}>{item.details.desc[4]}</p>
                                <input id="chkTerms" type="checkbox" style={{width:18, height: 18}}  />
                                <label htmlFor="chkTerms" style={{fontSize:'1rem'}}>&nbsp;{item.terms}</label>
                                <br/>
                                <a id="aWwus" className={`btn btn-success`} style={{padding:15}} href="mailto:support@sebrussi.com"><span style={{fontWeight:'bold', fontSize:22}}>{item.btnSubmit}</span></a>
                                {/* <a id="aWwus" disabled className="btn btn-secondary" style={{padding:20}}><span style={{fontWeight:'bold', fontSize:22}}>{item.btnSubmit}</span></a> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles['service-card']} >
                        
                        <div className={styles['service-info']} >
                            
                            <div>
                                <h2>{item.becomeA}</h2>
                                <div style={{paddingTop:15}}>
                                    <div className="form-group">
                                        <label htmlFor="txt" style={{fontSize:'1.2rem'}}>{item.whoiam}</label>
                                        <textarea className="form-control" id="txt" rows="4" maxLength="1024"></textarea>
                                    </div>
                                    <label style={{fontSize:'1.2rem'}}>{item.social}</label>
                                    <div style={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap', flexDirection:'column'}}>
                                        <div style={{flex:1}}><i className="fa fa-instagram" style={iStyle}></i><input type="text" id="ig" className="form-control" style={inpStyle} onChange={onChange}  maxLength="50" autoComplete={'off'} /></div>
                                        <div style={{flex:1}}><i className="fa fa-facebook-official" style={iStyle}></i><input type="text" id="fb" className="form-control" style={inpStyle} onChange={onChange}  maxLength="50" autoComplete={'off'} /></div>
                                        <div style={{flex:1}}><i className="fa fa-youtube" style={iStyle}></i><input type="text" id="yt" className="form-control" style={inpStyle} onChange={onChange}  maxLength="50" autoComplete={'off'} /></div>
                                        <div style={{flex:1}}><i className="fa fa-twitter" style={iStyle}></i><input type="text" id="tw" className="form-control" style={inpStyle} onChange={onChange}  maxLength="50" autoComplete={'off'} /></div>
                                    </div>
                                </div>
                                <input id="chkTerms" type="checkbox" style={{width:18, height: 18}}  />
                                <label htmlFor="chkTerms" style={{fontSize:'1rem'}}>&nbsp;{item.terms}</label>
                            </div>
                        </div>

                    </div> */}
                    </Fragment>
                })
            }
            <div style={{padding:40}}>&nbsp;</div>
        </div>
    )
}

export default Workwithus 


