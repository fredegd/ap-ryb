import React, { useState } from 'react';
import NeonDivider from './NeonDivider';

const Contacts = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('Grazie per la tua richiesta! Ti contatteremo per confermare l\'appuntamento.');
        setTimeout(() => {
            setMessage(null);
        }, 3000);
        event.currentTarget.reset();
    };

    return (
        <>
            <section id="contatti" className="py-20 ">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">Contattaci per il tuo Reset</h2>
                    <NeonDivider className="w-16 mx-auto mb-10" />

                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Form di Contatto */}
                        <div className="bg-dark-bg p-8 rounded-xl shadow-2xl border border-neon-yellow/30">
                            <h3 className="text-2xl font-semibold mb-6 ">Richiedi un Appuntamento</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neon-yellow/80">Nome Completo</label>
                                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-gray-500 border border-gray-700 rounded-md text-gray-50 focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow/50 transition duration-200" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neon-yellow/80">Email</label>
                                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-gray-500 border border-gray-700 rounded-md text-gray-50 focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow/50 transition duration-200" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neon-yellow/80">Dettagli della Richiesta</label>
                                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 bg-gray-500 border border-gray-700 rounded-md text-gray-50 focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow/50 transition duration-200"></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 px-4 border-2 border-neon-yellow bg-neon-yellow text-dark-bg font-semibold rounded-lg uppercase tracking-wider hover:bg-dark-bg hover:text-neon-yellow transition duration-300">
                                    Invia Richiesta
                                </button>
                            </form>
                        </div>

                        {/* Informazioni di Contatto */}
                        <div className="space-y-6 md:mt-8">
                            <div className="p-6 bg-dark-bg rounded-xl border border-neon-yellow/30">
                                <h3 className="text-xl font-semibold text-neon-yellow mb-3">Dettagli Studio</h3>
                                <p className=" flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-3 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.707A5 5 0 0016 14V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v7a2 2 0 01-4 0V5a2 2 0 00-2-2H4a2 2 0 00-2 2v12a4 4 0 004 4h12a4 4 0 004-4v-3a2 2 0 00-2-2z"></path></svg>
                                    Via San Martino, 123 - 00100 Diocanino (Veneto) <span className="text-red-400 font-bold ml-2">(PERSONALIZZA)</span>
                                </p>
                                <p className=" flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-3 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href="tel:+39061234567" className="hover:text-neon-yellow transition duration-200">+39 123456789</a>
                                </p>
                                <p className=" flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:info@resetyourbody.it" className="hover:text-neon-yellow transition duration-200">info@resetyourbody.it</a>
                                </p>
                            </div>
                            <div className="p-6 bg-dark-bg rounded-xl border border-neon-yellow/30">
                                <h3 className="text-xl font-semibold text-neon-yellow mb-3">Orari e Accesso</h3>
                                <p className=" mb-2">Lun - Ven: 09:00 - 18:00</p>
                                <p className=" mb-2">Sab: 09:00 - 13:00 </p>
                                <p className="text-sm text-gray-400">Si riceve esclusivamente su appuntamento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Message Box */}
            {message && (
                <div id="message-box" className="fixed bottom-4 right-4 bg-neon-yellow text-dark-bg px-6 py-3 rounded-lg shadow-2xl opacity-100 transition-opacity duration-300" style={{ zIndex: 1000 }}>
                    {message}
                </div>
            )}
        </>
    );
};

export default Contacts;
