import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const MobileSocialBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-white/10 px-4 py-3.5 shadow-2xl z-40">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-none">Current Availability</span>
            <span className="text-xs font-black text-white uppercase tracking-wider mt-0.5">Only 1 Room Left</span>
          </div>
        </div>
        <Link 
          to="/schedule-a-tour" 
          className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 active:scale-95 transition-all"
        >
          <Calendar size={12} />
          Book Tour
        </Link>
      </div>
    </div>
  );
};

export default MobileSocialBar;