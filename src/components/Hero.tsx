import React, { useRef, useEffect } from 'react';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const color = 'rgba(226, 255, 0, 0.7)'; // Neon Yellow con trasparenza

        let mouse = { x: 0, y: 0 };
        let particles: Particle[] = [];
        const numParticles = 80;
        const particleSize = 1;
        const connectionDistance = 150;
        const maxVelocity = 0.5;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            originalX: number;
            originalY: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * maxVelocity;
                this.vy = (Math.random() - 0.5) * maxVelocity;
                this.originalX = x;
                this.originalY = y;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                // Movimento base
                this.x += this.vx;
                this.y += this.vy;

                // Rimbalzo dai bordi
                if (canvas) {
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }

                // Forza di attrazione/repulsione verso la posizione originale
                const dxToOriginal = this.originalX - this.x;
                const dyToOriginal = this.originalY - this.y;
                this.vx += dxToOriginal * 0.0005;
                this.vy += dyToOriginal * 0.0005;

                // Limita la velocità
                this.vx = Math.min(Math.max(this.vx, -maxVelocity), maxVelocity);
                this.vy = Math.min(Math.max(this.vy, -maxVelocity), maxVelocity);
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            if (canvas) {
                for (let i = 0; i < numParticles; i++) {
                    particles.push(new Particle(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height
                    ));
                }
            }
        };

        const resizeCanvas = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = window.innerWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        const connectParticles = () => {
            if (!ctx) return;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.strokeStyle = `rgba(226, 255, 0, ${1 - (distance / connectionDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                const dx_mouse = p1.x - mouse.x;
                const dy_mouse = p1.y - mouse.y;
                const distance_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

                if (distance_mouse < connectionDistance) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - (distance_mouse / connectionDistance)})`;
                    ctx.lineWidth = 1.0;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();

                    const strength = 0.02 * (1 - (distance_mouse / connectionDistance));
                    p1.vx += (dx_mouse / distance_mouse) * strength;
                    p1.vy += (dy_mouse / distance_mouse) * strength;
                }
            }
        };

        let animationFrameId: number;
        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            connectParticles();
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const mouseMoveHandler = (event: MouseEvent) => {
            const rect = canvas?.getBoundingClientRect();
            if (rect) {
                mouse.x = event.clientX - rect.left;
                mouse.y = event.clientY - rect.top;
            }
        };
        
        const touchMoveHandler = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const rect = canvas?.getBoundingClientRect();
                if (rect) {
                    mouse.x = touch.clientX - rect.left;
                    mouse.y = touch.clientY - rect.top;
                }
            }
        };

        init();
        animate();
        
        window.addEventListener('resize', init);
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('touchmove', touchMoveHandler, { passive: true });

        return () => {
            window.removeEventListener('resize', init);
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('touchmove', touchMoveHandler);

            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            <canvas id="hero-canvas" ref={canvasRef}></canvas>
            <div className="hero-content text-center px-4">
                <h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tight leading-none">
                    <span className="neon-text-glow">reset</span>
                    <span className="text-gray-100 block mt-2">your body</span>
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-neon-yellow/80 font-medium">
                    Alessandro Paradiso | Massoterapia & Chinesiologia
                </p>
                <a href="#servizi" className="mt-10 inline-block py-3 px-8 text-lg font-semibold uppercase tracking-wider border-2 border-neon-yellow bg-neon-yellow text-dark-bg rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(226,255,0,0.8)] transition duration-300 transform hover:scale-105">
                    Scopri i Servizi
                </a>
            </div>
        </section>
    );
};

export default Hero;
