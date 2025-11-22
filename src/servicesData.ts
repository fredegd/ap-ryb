export interface Service {
    title: string;
    description: string;
    benefits: string[];
    category: string;
    imageUrl?: string;
}

export const services: Record<string, Service> = {
    'total-body-reset': {
        title: "Total Body Reset",
        description: "Un trattamento articolare completo che si concentra sul riallineamento e il rilassamento di tutte le principali articolazioni del corpo. Questa sessione intensiva include un massaggio esteso e decontratturante mirato alla schiena, con l'obiettivo di alleviare la tensione e ripristinare la mobilità in tutto il corpo.",
        benefits: ["Riduce la rigidità articolare", "migliora l'ampiezza del movimento", "allevia il dolore cronico alla schiena", "promuove un profondo rilassamento"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'total-body-massage': {
        title: "Massaggio Total Body",
        description: "Un'esperienza di massaggio classica e completa che copre il corpo dalla testa ai piedi. Questo trattamento è progettato per lenire i muscoli, migliorare la circolazione e indurre uno stato di profondo rilassamento.",
        benefits: ["Riduzione dello stress", "rilassamento muscolare", "miglioramento della circolazione sanguigna", "un senso generale di benessere"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'gambe-leggere': {
        title: "Gambe Leggere",
        description: "Un trattamento completo e specializzato progettato specificamente per alleviare la pesantezza e l'affaticamento delle gambe. Questa terapia si concentra sul miglioramento della circolazione e sulla riduzione della ritenzione di liquidi.",
        benefits: ["Riduce il gonfiore", "allevia l'affaticamento delle gambe", "previene la sindrome delle gambe senza riposo", "migliora il comfort generale delle gambe"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'linfodrenaggio': {
        title: "Linfodrenaggio",
        description: "Una tecnica di massaggio dolce finalizzata a stimolare il sistema linfatico, fondamentale per la disintossicazione e l'equilibrio dei liquidi. Offriamo trattamenti mirati per aree specifiche: trattamento viso, trattamento braccia e trattamento gambe.",
        benefits: ["Disintossicazione", "riduzione del gonfiore", "miglioramento della funzione immunitaria", "miglioramento della salute della pelle"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'massaggio-decontratturante': {
        title: "Massaggio Decontratturante",
        description: "Questo massaggio terapeutico mira a contratture e nodi muscolari, comuni dopo l'attività fisica o a causa dello stress. Offriamo trattamenti specializzati per gambe sportive e decontratturanti per schiena/collo.",
        benefits: ["Allevia il dolore e la rigidità muscolare", "migliora la flessibilità muscolare", "accelera il recupero dallo sforzo fisico"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'massaggio-benessere': {
        title: "Massaggio Benessere",
        description: "Progettato per il massimo relax e ringiovanimento, questo massaggio si concentra sul benessere generale, con opzioni per viso, schiena e collo completi e total body.",
        benefits: ["Rilassamento profondo", "sollievo dallo stress", "miglioramento dell'umore", "un rinnovato senso di energia"],
        category: "Massoterapia",
        imageUrl: "/massaggi.jpg"
    },
    'valutazione-posturale': {
        title: "Valutazione Posturale",
        description: "Una valutazione dettagliata della postura del tuo corpo, che identifica squilibri e disallineamenti. Questo servizio include ginnastica posturale correttiva personalizzata per affrontare i problemi identificati.",
        benefits: ["Corregge la cattiva postura", "riduce il dolore alla schiena e al collo", "previene futuri infortuni", "migliora la consapevolezza del corpo"],
        category: "Chinesiologia",
        imageUrl: "/massaggi.jpg"
    },
    'ginnastica-dolce': {
        title: "Ginnastica Dolce",
        description: "Attività articolari a basso impatto adatte a persone di tutte le età e livelli di fitness. Questo programma enfatizza esercizi di stretching e mobilità, progettati per migliorare la flessibilità, l'equilibrio e la salute delle articolazioni senza impatti faticosi.",
        benefits: ["Aumenta la flessibilità", "aumenta l'ampiezza del movimento", "migliora l'equilibrio e la coordinazione", "è sicuro per le articolazioni sensibili"],
        category: "Chinesiologia",
        imageUrl: "/massaggi.jpg"
    },
    'valutazione-chinesiologica': {
        title: "Valutazione Chinesiologica",
        description: "Una valutazione completa progettata per obiettivi funzionali specifici, tra cui il recupero funzionale post-riabilitazione e il recupero della stabilità e della forza (post-trauma).",
        benefits: ["Accelera il recupero", "ripristina il movimento funzionale", "previene nuovi infortuni", "costruisce una forza resiliente"],
        category: "Chinesiologia",
        imageUrl: "/massaggi.jpg"
    },
    'personal-training': {
        title: "Personal Training",
        description: "Raggiungi le tue aspirazioni di fitness con i nostri programmi di allenamento personalizzati, sapientemente progettati per soddisfare le tue esigenze e i tuoi obiettivi individuali, tra cui l'allenamento per l'ipertrofia muscolare e l'allenamento per la perdita di peso.",
        benefits: ["Risultati mirati", "maggiore motivazione", "tecnica di esercizio corretta", "progresso sostenibile"],
        category: "Personal Training",
        imageUrl: "/massaggi.jpg"
    },
    'pilates': {
        title: "Pilates",
        description: "Presto offriremo sessioni di Pilates, un popolare metodo di esercizio incentrato sul rafforzamento del core, sul miglioramento della flessibilità e sull'aumento della consapevolezza del corpo.",
        benefits: ["Forza del core", "miglioramento della postura", "maggiore flessibilità", "connessione mente-corpo"],
        category: "Prossimamente",
        imageUrl: "/massaggi.jpg"
    }
};
