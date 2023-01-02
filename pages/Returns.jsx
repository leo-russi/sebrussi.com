import t from '../styles/terms-privacy.module.css'
import locale from '../localeData/ReturnsLoc'

const ITEXT = ({lang}) => <div>
    {lang == 'en' && <>
        <p>Your orders can be returned within 14 days from the delivery date.</p>
        <p>While allowing the test of wearability, it will be a necessary condition for the return that the product has not been used or washed.</p>
        <p>Shipping costs will be borne by the customer, who can use the national postal system and the cheapest rate.</p>
        <p>The reimbursement will include only the cost of the product and not the accessory costs.</p>
    </>}
    {lang == 'fr' && <>
        <p>Toutes les commandes passées sont éligibles à une période de retour étendue à 14 jours à partir de la date de livraison.</p>
        <p>Tout en permettant le test de portabilité, il sera une condition nécessaire pour le retour que le produit n'a pas été utilisé ou lavé.</p>
        <p>Les frais d'expédition seront à la charge du client, qui peut utiliser le système postal national et le tarif le moins cher.</p>
        <p>Le remboursement comprendra uniquement le coût du produit et non les frais accessoires.</p>
    </>}
    {lang == 'it' && <>
        <p>Tutti i vostri ordini possono essere restituiti entro 14 giorni dalla consegna.</p>
        <p>Pur consentendo la prova di vestibilità, sarà condizione necessaria per la restituzione che il prodotto non sia stato usato o lavato.</p>
        <p>Le spese di spedizione saranno a carico del cliente, il quale potrà usare il sistema postale nazionale e la tariffa più economica.</p>
        <p>Il rimborso riguarderà solo il costo del prodotto e non le spese accessorie.</p>
    </>}
</div>

const Returns = ({lang}) => { 
    
    const lc = locale[lang]
    return (
        <div className={t.terms}>
            <h1>{lc.caption}</h1>
            <div className={t.container} >
                <div>&nbsp;</div>
                <div className={`${t.item}`} style={{display:'block'}}>
                <p style={{fontWeight: 'bold'}}>{lc.header}</p> 
                <ITEXT lang={lang} />
                <p>&nbsp;</p>
                </div>
            </div>
        </div>
    )
}

export default Returns