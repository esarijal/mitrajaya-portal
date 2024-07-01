import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#1E232E]">
      <Loader2 color="#ffff" className="animate-spin" size={32} />
      <span className="sr-only">loading</span>
    </div>
  );
}

export default Loader;
