import { Separator } from "../ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="container py-5 md:py-[60px] space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between ">
        <div className="space-y-4 md:max-w-[300px]">
          <div className="flex items-center gap-2">
            <img src="/logo-1.png" alt="" className="h-5 md:h-12" />
            <h1 className="flex flex-col text-lg font-bold leading-tight uppercase text-start text-[#eab723]">
              Mitra Jaya{" "}
              <span className="text-xs font-semibold text-[#e4cc4c]">
                PORTAL
              </span>
            </h1>
          </div>
          <p className="text-sm text-primary-foreground">
            Portal Berita Terpercaya: Menyajikan Berita Daerah Terdepan dan
            Terpercaya di Sekitar Anda
          </p>
        </div>

        <div className="text-sm space-y-7">
          <p className="text-primary-foreground">Footer Title</p>
          <ul className="space-y-6 text-primary">
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
          </ul>
        </div>

        <div className="text-sm space-y-7">
          <p className="text-primary-foreground">Footer Title</p>
          <ul className="space-y-6 text-primary">
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
          </ul>
        </div>

        <div className="text-sm space-y-7">
          <p className="text-primary-foreground">Footer Title</p>
          <ul className="space-y-6 text-primary">
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
            <li>Footer Link</li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="space-y-8 md:flex md:items-center md:space-y-0 md:justify-between">
        <p className="text-[#B6B9CE] text-xs">Copyright @2024</p>
        {/* <ul className="flex gap-4">
          <li className="p-3 rounded-full bg-active w-fit">
            <Facebook fill="#1E232E" />
          </li>
          <li className="p-3 rounded-full bg-active w-fit">
            <Twitter fill="#1E232E" />
          </li>
          <li className="p-3 rounded-full bg-active w-fit">
            <Instagram fill="#1E232E" stroke="#EDC12D" />
          </li>
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
