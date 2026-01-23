import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
            <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
                <Link
                    href="#"
                    className="px-5 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/5 transition-all hover:bg-white/20"
                >
                    Home
                </Link>
                <Link
                    href="#teams"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Teams
                </Link>
                <Link
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    FAQ
                </Link>
            </div>
        </nav>
    );
}
