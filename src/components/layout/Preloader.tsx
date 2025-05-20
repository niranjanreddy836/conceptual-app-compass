
import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-8 border-t-[#0073e6] border-r-[#b5deff] border-b-[#0073e6] border-l-[#b5deff] animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-[#0073e6]">PW</div>
      </div>
      <div className="absolute bottom-10 text-center">
        <h2 className="text-2xl font-bold text-[#0073e6]">PrimitiveWave</h2>
        <p className="text-slate-600 animate-pulse">Innovative Technology Solutions</p>
      </div>
    </div>
  );
};

export default Preloader;
