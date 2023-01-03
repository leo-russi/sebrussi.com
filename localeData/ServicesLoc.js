// db ProductName, plans and features should be the same!
export default {
    en:{
        pageTitle:"Services and Plans",
        services:"Services",
        tfs: "See below some transformations",
        cards:[
            {
                img:"/images/new/workoutplans-bb.jpg",
                h1:"One-to-One Coaching",
                h2:"Workout and motivation.",
                code:"Training",
                desc:["Specific and bespoke plans according to your goals and shape.","Motivation, monitoring and never ending support from your trainer will help to get to the next transformation.", "Check our One-to-One package!"],
                details:{
                    header:"One-to-One",
                    subheader:"What you get and how it works",
                    //// desc:["Evaluation questionnaire ", "Training plan", "Diet plan", "24/7 online support |via email, WhatsApp and phone (in english and italian)", "Weekly feedback", "Monthly check for adjusting and updating your plans"],
                    //desc:["Evaluation questionnaire ", "Training plan", "Nutrional advices", "Support", "Feedback on training", "Check for adjusting and updating your plans"]
                    //desc:["Dedicated support only for few (max 10 clients/month) and only in English and Italian","Evaluation questionnaire", "Training plan", "Nutrional advices","24/7 real-time (best effort) support via email, WhatsApp or phone","Daily feedback on training","Weekly check for adjusting and updating your plans"],
                    desc:["Evaluation questionnaire","Workout program", "Nutritional plan","Support via email, WhatsApp or phone","Periodic feedback on training","Periodic check for adjusting and updating your plans"]
                },
                plans: {
                    // Beginnero:"I would like to try but I am still a bit hesitating.",
                    // Explorer:"I need to find the right path and the right guide.",
                    // Expert:"I am already an expert and I need to improve.", 
                    // Pro:"I need to focus, I won't stop and I want to go to the next level.",
                    Standard:"Standard support, great for everyone.\nONLY in ENGLISH and ITALIAN.",
                    VIP:"Dedicated support, only for few (max 10 clients/month).\nONLY in ENGLISH and ITALIAN."
                },
                features: {
                    Standard:["Evaluation questionnaire", "Training plan", "Nutrional advices","Support via email (within 48 hours)","Weekly feedback on training","Monthly check for adjusting and updating your plans"],
                    VIP:["Evaluation questionnaire", "Training plan", "Nutrional advices","24/7 real-time (best effort) support via email, WhatsApp and phone","Daily feedback on training","Daily check for adjusting and updating your plans"]
                },
                duration: {
                    text:'Duration'
                    // Standard:[{opt:"m", desc:"Month", price:60}, {opt:"q", desc:"Quarter", price:150}, {opt:"h", desc:"Half-year", price: 270}, {opt:"y", desc:"Year", price: 470}],
                    // VIP:[{opt:"m", desc:"Month", price:300}, {opt:"q", desc:"Quarter", price:800}, {opt:"h", desc:"Half-year", price: 1500}, {opt:"y", desc:"Year", price: 2700}],
                },
                btnBuy: "BUY",
                comingsoon: []
            },
            {
                img: "/images/new/workoutplans-bb.jpg", //"/images/meal-plans.jpg",
                h1:"Self-service Plans",
                h2:"Pick your specific packaged plans.",
                code:"Packages",
                desc:["Workout as you need.","Pick up any packaged plans you wish."],
                details:{
                    header:"Packaged plans",//"What you get and how it works",
                    subheader:"Pick what you need",
                    desc:["Packaged plans", "Easy to follow"]
                },
                plans:{
                    Packages: "Available Packages"
                },
                features: {
                    //Packages:["Package1", "Package2", "Package3","Package4","Package5","Package6"],
                    //VIP:["Evaluation questionnaire", "Training plan", "Diet plan","24/7 real-time (best effort) support via email, WhatsApp and phone","Daily or weekly feedback on training and diet","Daily or weekly check for adjusting and updating your plans"]
                },
                
                btnBuy: "BUY",
                comingsoon: ["...coming soon..."]
            }
            // {
            //     img: "", //"/images/meal-plans.jpg",
            //     h1:"Meal Plans",
            //     h2:"All your meal plans.",
            //     code:"Nutrition",
            //     desc:["Workout is important but it has to meet a proper diet for its best results.","Ad hoc check and study will provide you with the best schedule and meal."],
            //     details:{
            //         header:"",//"What you get and how it works",
            //         subheader:"",
            //         desc:[""]
            //     },
            //     comingsoon:["We are getting ready for that...","Please, come back soon or create an account and receive our automatic notification!"]
            // }
        ]
    },
    fr:{
        pageTitle:"Services et Plans",
        services:"Services",
        tfs:"Voir ci-dessous quelques transformations",
        cards:[
            {
                img:"/images/new/workoutplans-bb.jpg",
                h1:"Coaching individuel",
                h2:"Entraînements et motivation.",
                code:"Training",
                desc:["Des plans spécifiques et personnalisés selon vos objectifs et votre forme.","La motivation, le suivi et le soutien sans fin de votre entraîneur vous aideront à passer à la prochaine transformation."],
                details:{
                    header:"One-to-One",
                    subheader: "Ce que nous offrons et comment ça marche",
                    // desc:["Questionnaire d'évaluation", "Plan de formation", "Régime alimentaire", "Assistance en ligne 24h/24, 7j/7 |via email, WhatsApp et téléphone (en anglais et italien)", "Commentaires hebdomadaires", "Contrôle mensuel pour l'ajustement et la mise à jour de vos programmes"]
                    desc:["Questionnaire d'évaluation", "Plan de formation", "Directives nutritionnelles", "Assistance par e-mail, WhatsApp et téléphone", "Commentaires sur votre entraînement et votre régime alimentaire", "Contrôle périodique pour l'ajustement et la mise à jour de vos programmes"]
                },
                plans: {
                    // Beginner:"Je voudrais essayer mais j'hésite encore un peu.",
                    // Explorer:"Je dois trouver le bon chemin et le bon guide.",
                    // Expert:"Je suis déjà un expert et j'ai besoin de m'améliorer.", 
                    // Pro:"Je dois me concentrer, je ne vais pas m'arrêter et je veux passer au niveau suivant.",
                    Standard:"Support standard, super pour tout le monde.\nSeulement en ANGLAIS et ITALIEN.",
                    VIP:"Support dédié, seulement pour quelques-uns (max 10 clients/mois).\nSeulement en ANGLAIS et ITALIEN."
                },
                features: {
                    Standard:["Questionnaire d'évaluation", "Plan de formation", "Conseils nutritionnels","Assistance par email (dans les 48 heures)","Feedback chaque semaine sur l'entraînement","Contrôle mensuel pour ajuster et mettre à jour vos plans"],
                    VIP:["Questionnaire d'évaluation", "Plan de formation", "Conseils nutritionnels","Assistance 24 h sur 24 et 7 j sur 7 (au mieux) par e-mail, WhatsApp et téléphone","Commentaires sur une base quotidienne sur l'entraînement","Contrôle quotidien pour ajuster et mettre à jour vos plans"]
                },
                duration: {
                    text: 'Durée'
                    // Standard:[{opt:"m", desc:"Month", price:60}, {opt:"q", desc:"Quarter", price:150}, {opt:"h", desc:"Half-year", price: 270}, {opt:"y", desc:"Year", price: 470}],
                    // VIP:[{opt:"m", desc:"Month", price:300}, {opt:"q", desc:"Quarter", price:800}, {opt:"h", desc:"Half-year", price: 1500}, {opt:"y", desc:"Year", price: 2700}],
                },
                btnBuy: "ACHETER",
                comingsoon: []
            },
            {
                img: "/images/new/workoutplans-bb.jpg", //"/images/meal-plans.jpg",
                h1:"Self-service Plans",
                h2:"Choisissez vos plans spécifiques.",
                code:"Packages",
                desc:["Entraînez-vous selon vos besoins.","Ramassez tous les plans pré-emballés que vous souhaitez."],
                details:{
                    header:"Plans pré-emballés",//"What you get and how it works",
                    subheader:"Choisissez ce dont vous avez besoin",
                    desc:["Plans pré-emballés", "Facile à suivre"]
                },
                plans:{
                    Packages: "Plans disponibles"
                },
                features: {
                    //Packages:["Package1", "Package2", "Package3","Package4","Package5","Package6"],
                    //VIP:["Evaluation questionnaire", "Training plan", "Diet plan","24/7 real-time (best effort) support via email, WhatsApp and phone","Daily or weekly feedback on training and diet","Daily or weekly check for adjusting and updating your plans"]
                },
                btnBuy: "ACHETER",
                comingsoon: ["...coming soon..."]
            }
        ]
    },
    it:{
        pageTitle:"Servizi e Piani",
        services:"Servizi",
        tfs:"Guarda qui sotto alcune trasformazioni",
        cards:[
            {
                img:"/images/new/workoutplans-bb.jpg",
                h1:"Coaching individuale",
                h2:"Allenamento e motivazione.",
                code:"Training",
                desc:["Piani specifici e su misura in base ai vostri obiettivi e forma fisica.","La motivazione, il monitoraggio e il supporto senza fine del tuo trainer ti aiuteranno a passare alla prossima trasformazione."],
                details:{
                    header:"One-to-One",
                    subheader:"Cosa ti offriamo e come funziona",
                    // desc:["Questionario di valutazione", "Piano d'allenamento", "Piano nutrizionale", "Supporto online 24/7 |via email, WhatsApp e telefono (in inglese ed italiano)", "Feedback settimanale", "Verifica mensile per rimodulare ed aggiornare i tuoi piani"]
                    desc:["Questionario di valutazione", "Programma d'allenamento", "Piano alimentare", "Supporto via email, WhatsApp o telefono", "Feedback periodico su allenamento e dieta", "Verifica periodica per rimodulare ed aggiornare i tuoi piani"]
                },
                plans: {
                    // Beginner:"Vorrei provare ma sono un pochino incerto.",
                    // Explorer:"Ho bisogno di trovare il mio percorso e la mia guida.",
                    // Expert:"Sono già esperto ma ho bisogno di migliorare.", 
                    // Pro:"Devo rimanere concentrato, non mi voglio fermare e voglio andare al livello successivo.",
                    Standard:"Supporto standard, ottimo per tutti.\nSOLO in INGLESE e ITALIANO",
                    VIP:"Supporto dedicato, solo per pochi (max 10 clienti/mese).\nSOLO in INGLESE e ITALIANO"
                },
                features: {
                    Standard:["Questionario di valutazione", "Piano d'allenamento", "Consigli nutrizionali", "Support via email (entro 48 ore)","Feedback ogni settimana su allenamento","Verifica mensile per rimodulare ed aggiornare i tuoi piani"],
                    VIP:["Questionario di valutazione", "Piano d'allenamento", "Consigli nutrizionali", "Assistenza 24h/7gg (al meglio) via email, WhatsApp e telefono","Feedback giornaliero su allenamento","Verifica giornaliera per rimodulare ed aggiornare i tuoi piani"]
                },
                duration: {
                    text: 'Durata'
                    // Standard:[{opt:"m", desc:"1 mese", price:60}, {opt:"q", desc:"3 mesi", price:150}, {opt:"h", desc:"Sei mesi", price: 270}, {opt:"y", desc:"1 anno", price: 470}],
                    // VIP:[{opt:"m", desc:"1 mese", price:300}, {opt:"q", desc:"3 mesi", price:800}, {opt:"h", desc:"Sei mesi", price: 1500}, {opt:"y", desc:"1 anno", price: 2700}],
                },
                btnBuy: "ACQUISTA",
                comingsoon: []
            },
            {
                img: "/images/new/workoutplans-bb.jpg", //"/images/meal-plans.jpg",
                h1:"Self-service Plans",
                h2:"Seleziona i tuoi piani preconfezionati.",
                code:"Packages",
                desc:["Allenati in base alle tue esigenze.","Seleziona i piani preconfezionati che desideri."],
                details:{
                    header:"Piani preconfezionati",//"What you get and how it works",
                    subheader:"Seleziona quel che ti serve",
                    desc:["Piani preconfezionati", "Facili da seguire"]
                },
                plans:{
                    Packages: "Pacchetti disponibili"
                },
                features: {
                    //Packages:["Package1", "Package2", "Package3","Package4","Package5","Package6"],
                    //VIP:["Evaluation questionnaire", "Training plan", "Diet plan","24/7 real-time (best effort) support via email, WhatsApp and phone","Daily or weekly feedback on training and diet","Daily or weekly check for adjusting and updating your plans"]
                },
                btnBuy: "ACQUISTA",
                comingsoon: ["...coming soon..."]
            }
        ]
    }
}