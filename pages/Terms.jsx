import t from '../styles/terms-privacy.module.css'
import locale from '../localeData/PrivacyOrTermsLoc'

export default function Terms({lang, html}){

    const lc = locale.terms[lang]
    return (<>
        {/* <div className={t.terms}>
            <h1>{lc.caption}</h1>
            <div className={t.container} >
                <div className={`${t.item}`} style={{display:'block'}} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div> */}
        <div className={t.terms}>
        <h1>{lc.caption}</h1>
        <div>
            <div className={`${t.item}`} style={{display:'block'}} dangerouslySetInnerHTML={{__html: html}} />
        </div>
        </div>
    </>
    )

}

export async function getServerSideProps(context) {

    const res = await fetch(`http://localhost:3000//legal/terms-${context.locale}.html`)
    const html = await res.text()
    return {
      props: {html}, 
    }
}