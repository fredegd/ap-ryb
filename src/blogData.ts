export interface Article {
  title: string;
  date: string;
  tag: string;
  content: string;
  imageUrl?: string;
}

export const blogArticles: Record<string, Article> = {
  "falsi-miti": {
    title: "Falsi Miti Sull'Allenamento: Cosa EVITARE",
    date: "01 Ottobre 2025",
    tag: "Fitness & Chinesiologia",
    imageUrl: "/addominali.png",
    content: `
            <p>La palestra e l'allenamento sono pieni di luoghi comuni che, se seguiti ciecamente, possono rallentare i tuoi progressi o, peggio, causare infortuni. Distinguiamo la verità dalla finzione.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Mito 1: Più si suda, più si bruciano grassi.</h3>
            <p><strong>Falso.</strong> La sudorazione è principalmente un meccanismo di termoregolazione e la perdita di peso immediata che ne deriva è quasi esclusivamente acqua. L'allenamento efficace per la perdita di grasso si basa sull'intensità e sulla durata, non solo sulla sudorazione. Allenarsi con indumenti che aumentano il sudore può portare solo a disidratazione.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Mito 2: Le donne diventano "troppo muscolose" sollevando pesi.</h3>
            <p><strong>Falso.</strong> A causa dei livelli ormonali significativamente più bassi di testosterone, è estremamente difficile per le donne sviluppare una muscolatura eccessivamente voluminosa. L'allenamento con i pesi è invece fondamentale per aumentare il metabolismo, migliorare la densità ossea e ottenere un fisico tonico.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Il Vostro Reset:</h3>
            <p>Affidati a un professionista del movimento per un programma su misura. L'allenamento deve essere intelligente, non estenuante. Ricorda, la massoterapia di recupero è il complemento ideale per ottimizzare l'efficacia dei tuoi allenamenti, prevenendo gli infortuni dovuti all'eccessivo carico.</p>
        `,
  },
  "artrite-artrosi": {
    title: "Artrite o Artrosi? Capire il Dolore Articolare",
    date: "20 Settembre 2025",
    tag: "Salute & Prevenzione",
    imageUrl: "/artrite.jpeg",
    content: `
            <p>Il dolore articolare è comune, ma distinguere tra artrite e artrosi è il primo passo per un trattamento efficace. Sebbene i sintomi possano sembrare simili, le cause e gli approcci terapeutici sono molto diversi.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Artrosi: L'Usura dell'Articolazione</h3>
            <p>L'artrosi (osteoartrite) è una malattia degenerativa. È causata dall'usura della cartilagine, il tessuto che ammortizza le estremità delle ossa. Il dolore tende a peggiorare con l'attività e migliora con il riposo. L'approccio si concentra sul rallentare l'usura, spesso con il <strong>rafforzamento muscolare (chinesiologia)</strong> per stabilizzare l'articolazione e la <strong>massoterapia</strong> per alleviare la tensione muscolare compensatoria.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Artrite: L'Infiammazione Cronica</h3>
            <p>L'artrite (reumatoide) è una malattia autoimmune e infiammatoria. Il sistema immunitario attacca i tessuti sani, causando infiammazione. Il dolore è spesso peggiore al mattino e migliora con il movimento leggero. In questo caso, il trattamento principale è farmacologico, ma una <strong>chinesiologia mirata</strong> aiuta a mantenere la mobilità senza sovraccaricare le articolazioni infiammate.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Il Nostro Supporto:</h3>
            <p>In studio, valutiamo il tuo quadro clinico per sviluppare un piano di trattamento sicuro. L'obiettivo è ridurre il dolore, migliorare la gamma di movimento e rafforzare la muscolatura di supporto, integrandolo con la terapia prescritta dal tuo specialista.</p>
        `,
  },
  nuoto: {
    title: "Nuoto: è Davvero lo Sport Più Completo?",
    date: "10 Ottobre 2025",
    tag: "Sport & Performance",
    imageUrl: "/nuoto.jpg",
    content: `
            <p>Il nuoto è universalmente celebrato come lo sport "più completo". Questo è vero, ma con delle sfumature. È uno degli sport più efficaci perché coinvolge quasi tutti i gruppi muscolari e, grazie alla galleggiabilità, offre un allenamento a basso impatto, ideale per chi ha problemi articolari.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Cosa Rende il Nuoto Unico?</h3>
            <p>La resistenza dell'acqua costringe i muscoli a lavorare in modo efficiente, migliorando la capacità cardiovascolare e la resistenza muscolare contemporaneamente. Inoltre, favorisce la correzione posturale, in particolare se eseguito con la tecnica corretta.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Attenzione agli Squilibri:</h3>
            <p>Tuttavia, anche il nuoto può creare squilibri muscolari se non bilanciato. I nuotatori possono sviluppare eccessiva rigidità nella parte superiore del corpo (spalle) o disfunzioni nella rotazione. È qui che interveniamo:</p>
            <ul class="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li><strong>Massoterapia:</strong> Per decontrarre le spalle e la zona lombare, spesso sovraccaricate.</li>
                <li><strong>Chinesiologia:</strong> Per esercizi specifici a terra, mirati a rafforzare la muscolatura stabilizzatrice (core) e a compensare i movimenti ripetitivi in acqua.</li>
            </ul>
            <p class="mt-4">Per un corpo veramente "reset" e performante, l'integrazione è la chiave.</p>
        `,
  },
  "stretching-benefici": {
    title: "Lo Stretching: Quando e Come Farlo Correttamente",
    date: "15 Novembre 2025",
    tag: "Salute & Prevenzione",
    imageUrl: "/calorie.jpg",
    content: `
            <p>Lo stretching è una componente fondamentale del benessere fisico, ma c'è molta confusione su quando e come praticarlo per ottenere i massimi benefici. Facciamo chiarezza.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Stretching Dinamico vs. Statico</h3>
            <p><strong>Lo stretching dinamico</strong>, che include movimenti controllati attraverso un'intera gamma di movimento (es. slanci delle gambe, rotazioni del busto), è ideale prima dell'allenamento. Prepara i muscoli all'attività, aumenta il flusso sanguigno e migliora la mobilità senza ridurre la forza.</p>
            <p><strong>Lo stretching statico</strong>, dove si mantiene una posizione per un certo periodo (es. 20-30 secondi), è più efficace dopo l'allenamento. Aiuta a rilassare i muscoli, migliorare la flessibilità a lungo termine e favorire il recupero.</p>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Errori Comuni da Evitare</h3>
            <ul class="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li><strong>Stretching statico a freddo:</strong> Può aumentare il rischio di infortuni. I muscoli devono essere caldi.</li>
                <li><strong>"Molleggiare":</strong> Eseguire movimenti balistici o a scatti può attivare un riflesso di stiramento che porta il muscolo a contrarsi, ottenendo l'effetto opposto.</li>
                <li><strong>Forzare troppo:</strong> Lo stretching non deve essere doloroso. Raggiungi un punto di tensione lieve e mantienilo.</li>
            </ul>
            <h3 class="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Il Nostro Approccio Integrato:</h3>
            <p>In studio, utilizziamo tecniche di allungamento assistito e massoterapia per lavorare sulla flessibilità in modo sicuro ed efficace. Un piano di chinesiologia personalizzato include sempre le giuste modalità di stretching per complementare il tuo percorso di allenamento e recupero.</p>
        `,
  },
};
