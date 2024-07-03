import { Loader2 } from "lucide-react";

function Loader({ color = "primary" }: { color?: "primary" | "secondary" }) {
  return (
    <div
      className={`flex items-center justify-center w-full h-screen ${
        color === "primary" ? "bg-[#1E232E]" : "bg-white"
      } `}
    >
      <Loader2
        color={color === "primary" ? "#ffff" : "#1E232E"}
        className="animate-spin"
        size={32}
      />
      <span className="sr-only">loading</span>
    </div>
  );
}

export default Loader;
