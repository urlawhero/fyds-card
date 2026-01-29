import Image from "next/image";
import { FaWhatsapp, FaGithub, FaGlobe, FaFileDownload, FaLinkedin, FaCode, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// INSTALL ICONS FIRST: npm install react-icons

export default function TechCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black text-white selection:bg-purple-500/30">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10">
        
        <div className="flex flex-col items-center text-center">
          
          {/* PROFILE PICTURE - Remove this block if you don't have profile.jpg yet */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full p-1 border-2 border-purple-500/50 overflow-hidden shadow-lg shadow-purple-500/20">
              {/* Ensure profile.jpg is in your public folder */}
               <Image 
                src="/profile.jpg" 
                alt="Antonis" 
                width={128} 
                height={128} 
                className="object-cover w-full h-full rounded-full"
              />
            </div>
             {/* Small Logo Badge */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-black rounded-full border border-white/20 p-1.5 flex items-center justify-center">
               <Image 
                src="/logo.png" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
            Antonis Nikolaides
          </h1>
          
          <h2 className="text-lg font-semibold text-white mb-1">
            For You Digital Solutions
          </h2>

          <p className="text-sm font-medium text-gray-400 mb-4 flex items-center justify-center gap-2">
            <FaCode className="text-blue-500" /> Founder & Full-Stack Dev
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">Next.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300">Supabase</span>
          </div>

          <div className="w-full space-y-4">
            
            {/* Primary Action: Save Contact */}
            <a href="/contact.vcf" download="Antonis_FYDS.vcf" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-white/10">
              <FaFileDownload /> Save Contact
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://wa.me/35797901102" className="flex items-center justify-center gap-2 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-2xl transition-all text-[#25D366]">
                <FaWhatsapp className="text-xl" /> Chat
              </a>
              <a href="https://foryoudigitalsolutions.com" target="_blank" className="flex items-center justify-center gap-2 py-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-2xl transition-all text-blue-400">
                <FaGlobe className="text-xl" /> Website
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
               <a href="mailto:fydigitalsolutions.com" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-gray-300">
                <FaEnvelope /> Email
              </a>
              <a href="tel:+35797901102" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-gray-300">
                <FaPhoneAlt /> Call
              </a>
            </div>
            
            <div className="flex justify-center gap-6 pt-6 border-t border-white/5 w-full opacity-60">
              <a href="#" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
