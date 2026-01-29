import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaGithub, FaGlobe, FaFileDownload, FaLinkedin, FaCode } from "react-icons/fa";

// INSTALL ICONS FIRST: npm install react-icons

export default function TechCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black text-white selection:bg-purple-500/30">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10">
        
        <div className="flex flex-col items-center text-center">
          {/* LOGO with Glow */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-24 h-24 rounded-full bg-black p-1 border border-white/10 overflow-hidden">
               <Image 
                src="/logo.png" 
                alt="FYDS" 
                width={100} 
                height={100} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
            Antonis Nikolaides
          </h1>
          <p className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            <FaCode className="text-blue-500" /> Founder & Full-Stack Dev
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">Next.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">Supabase</span>
          </div>

          <div className="w-full space-y-4">
            <a href="/contact.vcf" download className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] transition-transform">
              <FaFileDownload /> Save Contact
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://wa.me/35799XXXXXX" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-green-400">
                <FaWhatsapp className="text-xl" /> Chat
              </a>
              <a href="https://foryoudigitalsolutions.co" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-blue-400">
                <FaGlobe className="text-xl" /> Portfolio
              </a>
            </div>
            
            <div className="flex justify-center gap-6 pt-4 border-t border-white/5 w-full opacity-60">
              <a href="#" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
