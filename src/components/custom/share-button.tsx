import { Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function ShareButton() {
  // get url and copy it to clipboard
  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <button
          className="flex gap-2 text-xs font-normal text-primary-foreground md:text-base"
          onClick={copyToClipboard}
        >
          Share{" "}
          <Share2 fill="#667697" className="h-[14px] aspect-square md:h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="center" sideOffset={-100} className="p-2 w-fit">
        Link disalin ke clipboard !
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
