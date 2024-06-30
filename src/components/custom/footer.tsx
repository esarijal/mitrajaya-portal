import { Separator } from "../ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="container px-4 py-5 md:py-[60px] space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between ">
        <div className="space-y-4 md:max-w-[300px]">
          <img src="/logo.png" alt="" className="h-9" />
          <p className="text-sm text-primary-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur
            maximus quam.
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
        <p className="text-[#B6B9CE] text-xs">Copyright ©2022</p>
        <ul className="flex gap-4">
          <li className="p-3 rounded-full bg-active w-fit">
            <Facebook fill="#1E232E" />
          </li>
          <li className="p-3 rounded-full bg-active w-fit">
            <Twitter fill="#1E232E" />
          </li>
          <li className="p-3 rounded-full bg-active w-fit">
            <Instagram fill="#1E232E" stroke="#EDC12D" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
