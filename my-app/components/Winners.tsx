import Image from "next/image";

export default function Winners() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wide text-transparent drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-500 to-orange-300 bg-clip-text">
                    Winners-2026
                </span>
                <span className="ml-4 text-white drop-shadow-none filter-none">🏆</span>
            </h2>

            <div className="flex w-full max-w-7xl items-start justify-between px-4 md:px-12">
                {/* Left Column: Winners List */}
                <div className="flex flex-col items-center gap-6 text-xl md:text-2xl font-semibold text-gray-200">
                    <h3 className="text-orange-400 text-3xl font-bold mb-4 drop-shadow-md">Winners</h3>
                    <span className="hover:text-white transition-colors cursor-default">Team 1</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 1</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 4</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 7</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 1</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 1</span>
                    <span className="hover:text-white transition-colors cursor-default">Team 1</span>
                </div>

                {/* Center: Main Image */}
                <div className="relative group mx-8 mt-2 flex items-center justify-center">
                    {/* Glow effect behind image */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                    {/* Adjusted container to wrap image tightly */}
                    <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-[0_0_50px_rgba(255,255,255,0.1)] w-auto h-auto max-w-[800px] max-h-[500px]">
                        <Image
                            src="/alle-vinner.jpg"
                            alt="Winners 2026 Team Photo"
                            width={800}
                            height={450}
                            className="w-auto h-auto max-w-full max-h-full"
                        />
                        {/* Inner Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Right Column: GOAT */}
                <div className="flex flex-col items-center gap-6 text-xl md:text-2xl font-semibold text-gray-200">
                    <h3 className="text-purple-500 text-3xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">GOAT</h3>
                    <span className="hover:text-white transition-colors cursor-default">Team 3</span>
                </div>
            </div>

            {/* Scroll Down Indicator (Optional, maybe reused or different for this section) */}
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
    );
}
