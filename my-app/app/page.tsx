import Navbar from "@/components/Navbar";
import Orb from "@/components/Orb";
import Winners from "@/components/Winners";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 mt-12 md:mt-0">
          <div className="scale-100 hover:scale-105 transition-transform duration-700 ease-out">
            <Orb />
          </div>

          <div className="flex flex-col items-center animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-blue-200/80 mb-2 font-light">
              2026
            </h2>
            <h1 className="font-sans text-5xl md:text-7xl font-black tracking-widest text-white drop-shadow-2xl">
              AI-AWARDS
            </h1>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-xs uppercase tracking-widest font-medium text-gray-400">
            Scroll down
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      {/* Winners Section */}
      <section className="h-screen w-full snap-start">
        <Winners />
      </section>
    </main>
  );
}
