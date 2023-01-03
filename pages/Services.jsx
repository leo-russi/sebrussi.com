import NavLink from 'next/link'
import Image from 'next/image'
import locale from '../localeData/ServicesLoc'
import styles from '../styles/services.module.css'

const Services = ({lang}) => {

    const lc = locale[lang]
    return (<div className={styles['services-gate']} >
        <h1>{lc.title}</h1>
        <div style={{padding:10, fontWeight:'bold', fontSize: 32}}>STAY FIT.</div>
        <div style={{padding:10, fontWeight:'bold', fontSize: 32}}>STAY HEALTHY.</div>
        <div style={{padding: 40, display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            <div className={styles.productCategoryBtn} ><NavLink href={`/${lang}/Training`} >{lc.cards[0].h1}</NavLink></div>
            {/* <div className="productCategoryBtn" ><NavLink to={`/${lang}/Services/Packages`}>{lc.cards[1].h1}</NavLink> </div> */}
        </div>
        <div>
            <h3>{lc.tfs}</h3>
            <div style={{paddingTop:50, display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                {
                    [...Array(13).keys()].filter(n => n>0 && n !=5).map(item =>{
                        let tfitem = item.toString().padStart(2,'0')
                        return <Image key={`tf${tfitem}`} src={`/images/tfs/tf${tfitem}.jpg`} width={300} height={300} style={{width: '90vw', maxWidth:'500px', height:'auto', margin:'40px auto 40px auto'}} alt="trasformations" />
                    })
                }
            </div>
        </div>
    </div>)
    
}

export default Services 


