import { Fragment } from 'react'
import locale from '../localeData/ServicesLoc'
import styles from '../styles/services.module.css'

const Services = ({lang}) => {

    const lc = locale[lang]
    let cards = lc.cards.filter(f => f.code.toLowerCase() == "Training".toLowerCase())
    return (
        <div className={styles.services}>
            {/* <h1>{lc.services} - {cards[0].h1}</h1> */}
            <h1>{cards[0].h1}</h1>
            {
                cards.map((item, i) =>{
                    return (
                    <Fragment key={`c-${i}`}>
                    <div className={styles['service-card']}>
                    {!!item.img && <div className={styles['service-img']} ><img src={item.img} /></div>}
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
                            </div>
                        </div>
                    </div>
                    {!!item.details.header && <div className={styles['service-details']}>
                        <div style={{textAlign:'center', color:'#eee'}}>
                            <h2>{item.details.header}</h2>
                            <h3>{item.details.subheader}</h3>
                            {
                                item.details.desc.map( (desc, d) =>{
                                return( <p key={`dd-${i}-${d}`} className={styles['service-desc']} style={{fontSize:'1.5rem', margin: 10, borderBottom:'1px solid #333'}}>&nbsp;{
                                    desc.split('|').length==1 ? desc : <Fragment>
                                        <span>{desc.split('|')[0]}</span>
                                        <br/><span style={{fontSize:'1rem'}}>{desc.split('|')[1]}</span>
                                        {/* <br/><span style={{fontSize:'1rem'}}>{desc.split('|')[2]}</span> */}
                                        </Fragment>
                                    }&nbsp;</p>)
                                })
                            }
                        </div>
                    </div>}
                    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', padding:'50px 5px'}}>
                        <div style={{textAlign:'center'}}>
                            <p style={{fontWeight:500,fontSize:'1.25rem'}}>If interested, drop me an email to</p>
                            {/* <button className="btn btn-light font-weight-bold" style={{ color:'#000', minWidth:120}}>sebrussi@hotmail.com</button> */}
                            <a className="btn btn-light font-weight-bold" style={{ color:'#000', minWidth:120}} href="mailto:sebastian@sebrussi.com?subject=One-to-One Coacing">sebastian@sebrussi.com</a>
                        </div>
                    </div>
                    {/* <div style={{display:'none', justifyContent:'space-around', flexWrap:'wrap', padding:'50px 5px'}}>
                    {
                        item.comingsoon.length==0 && services.filter(currentSelected).map( (plan, p) =>{
                            let bgV = p % 2
                            let needsDDL = group == 'Packages'  ? '' : <DURATION duration={services.filter( d => d.productName == plan.productName)} current={plan.sku} change={this.changeDuration.bind(this, plan.productName)} /> //'/ monthly'
                            return(
                                <div key={plan.sku} className={`card text-white ${bg2[bgV]} mb-3`} style={{maxWidth: '18rem'}}>
                                    <div className="card-header" style={{textAlign:'center'}}>{plan.headline} <br/><span style={{fontWeight:500,fontSize:'1.25rem'}}>{plan.productName}</span> </div>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}}>{item.duration.text}:&nbsp;<span style={{fontSize:'14px'}}>&nbsp;{needsDDL}</span></h5>
                                        <h5 className="card-title" style={{textAlign:'center'}}><span>&euro; {plan.price}</span></h5>
                                        <p className="card-text">
                                            {item.plans[plan.productName].split("\n")[0]}
                                        </p>
                                        {item.plans[plan.productName].split("\n").length > 1 && <p className="card-text">
                                            <u>{item.plans[plan.productName].split("\n")[1]}</u>
                                        </p>}
                                        <ul style={{listStyle:'none', paddingLeft:0}}>
                                            {item.features[plan.productName] && item.features[plan.productName].map( (feature,f) =>{
                                                return <li key={`feat-${f}`}>- {feature}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="card-footer font-weight-bold" style={{position:'relative'}}>
                                        <span>&nbsp;</span>
                                        <MYBUYBTN buy={item.btnBuy} click={this.addToCart.bind(this, plan)} />
                                    </div>
                                </div>
                            )
                        })
                    }       
                    </div> */}

                    <div className="services-coming-soon">
                    {
                        item.comingsoon.map( (csoon, cs) => <p key={`cs-${cs}`}>{csoon}</p>)
                    }
                    </div>
                    </Fragment>
                    )
                })
            }
            
        </div>
    )
    
}

export default Services 


