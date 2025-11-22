const Hero = () => {
    return (
        <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden ">
            <div className="hero-content text-center px-4">
                <h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tight leading-none">
                    <span className="neon-text-glow">reset</span>
                    <span className="text-gray-200 block mt-2">your body</span>
                </h1>
                <p className="mt-8 text-xl md:text-2xl  font-medium">
                    Alessandro Paradiso | Massoterapia & Chinesiologia
                </p>
                <a href="#servizi" className="mt-10 inline-block py-3 px-8 text-lg font-semibold uppercase tracking-wider border-2  text-dark-bg rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                    Scopri i Servizi
                </a>
            </div>
        </section>
    );
};

export default Hero;
