import React from 'react';
import NeonDivider from './NeonDivider';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold uppercase mb-4 text-neon-yellow">Alessandro Paradiso: Terapia e Movimento</h2>
        <NeonDivider className="w-16 mx-auto mb-10" />
        <p className="text-xl text-gray-300 mb-6">
          Benvenuti nello studio dove la <strong>Massoterapia</strong> si unisce alla <strong>Chinesiologia</strong> per un recupero funzionale completo. Il mio approccio non si limita al sollievo immediato, ma mira a un <em>reset</em> duraturo del tuo corpo, correggendo la causa del problema attraverso la terapia manuale e il movimento guidato.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          Offro un percorso personalizzato per atleti, professionisti e chiunque cerchi di migliorare il proprio benessere fisico. Dalla gestione del dolore cronico all'ottimizzazione della performance sportiva, il focus è sempre sul <strong>ripristino dell'equilibrio e della funzionalità corporea</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
