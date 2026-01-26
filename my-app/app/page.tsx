'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Winners from "@/components/Winners";
import LightRays from "@/components/LightRays";

export default function Home() {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [animationStage, setAnimationStage] = useState<'initial' | 'text-visible' | 'final'>('initial');
  const [showLightRays, setShowLightRays] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intro Animation Sequence
  useEffect(() => {
    // Stage 1: Fade in text (start immediately)
    setTimeout(() => {
      setAnimationStage('text-visible');
    }, 100);

    // Stage 2: Move text down and show orb (after 2 seconds)
    setTimeout(() => {
      setAnimationStage('final');
    }, 1200);

    // Stage 3: Show Light Rays (after text settles)
    setTimeout(() => {
      setShowLightRays(true);
    }, 2000);
  }, []);

  // Video fade loop effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      // Fade out in the last 0.3 seconds
      if (duration - currentTime < 0.3) {
        setVideoOpacity(0);
      }
      // Fade in at the beginning (first 0.3 seconds)
      else if (currentTime < 0.3) {
        setVideoOpacity(1);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-black text-white">
      {/* Navbar fades in only at the final stage */}
      <div className={`transition-opacity duration-1000 delay-500 ${animationStage === 'final' ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Glow - fades in at final stage */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 delay-500 ${animationStage === 'final' ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Light Rays Animation - Appears after everything settles */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-[3000ms] ease-in-out z-0 ${showLightRays ? 'opacity-100' : 'opacity-0'}`}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#4D8EC3"
            raysSpeed={0.5}
            lightSpread={0.2}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.05}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Orb Video Container */}
          {/* Layout is natural flex column. We offset positions to animate. */}
          <div
            className={`
              scale-100 transition-all duration-1000 ease-in-out relative
              ${animationStage === 'final' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {/* Orb Video with Mask for seamless blending */}
            <div className="relative z-10" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-contain transition-opacity duration-500"
                style={{ opacity: videoOpacity }}
              >
                <source src="/orb.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Subtle glow behind the orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-blue-500/20 blur-[50px] rounded-full -z-10"></div>
          </div>

          {/* Text Container */}
          {/* initially offset UP to overlap the hidden orb space, then drops to 0 */}
          <div className={`
            flex flex-col items-center transition-all duration-1000 ease-in-out
            ${animationStage === 'initial' ? 'opacity-0 -translate-y-[130px] md:-translate-y-[160px]' : ''}
            ${animationStage === 'text-visible' ? 'opacity-100 -translate-y-[130px] md:-translate-y-[160px]' : ''}
            ${animationStage === 'final' ? 'opacity-100 translate-y-0' : ''}
          `}>
            <h2 className="font-serif text-4xl md:text-5xl mb-2 font-light bg-gradient-to-r from-[#B2A7E7] via-[#93BBE7] to-[#4D8EC3] bg-clip-text text-transparent">
              2026
            </h2>
            <h1 className="font-sans text-5xl md:text-5xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(77,142,195,0.4)]">
              AI-AWARDS
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
