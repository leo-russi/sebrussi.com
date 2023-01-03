import t from '../styles/terms-privacy.module.css'
import locale from '../localeData/AmbassadorTermsLoc'

const AmbassadorTerms = ({lang, html}) => { 
    const lc = locale[lang]
    return (
        <div className={t.terms}>
            <h1>{lc.caption}</h1>
            <div className={t.container} >
                <div>&nbsp;</div>
                <div className={`${t.item}`} style={{display:'block'}} dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const host = context.req.headers.host
    let protocol = "https://"
    if(host.startsWith('localhost')) protocol = "http://"
    const res = await fetch(`${protocol}${host}/legal/ambassadorterms-${context.locale}.html`)
    const html = await res.text()
    return {
      props: {html}, 
    }
}

export default AmbassadorTerms