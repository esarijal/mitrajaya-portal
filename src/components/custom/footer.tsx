import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="container py-5 md:py-[60px] space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between ">
        <div className="space-y-4 md:max-w-[300px]">
          <div className="flex items-center gap-2">
            <h1 className="flex flex-col text-lg font-bold leading-tight uppercase text-start text-[#eab723]">
            B E D A S U D U T P A N D A N G . I D
            </h1>
          </div>
          <p className="text-sm text-primary-foreground">
            Portal Berita Terpercaya: Menyajikan Berita Daerah Terdepan dan
            Terpercaya di Sekitar Anda
          </p>
        </div>

        <div className="text-sm space-y-7">
          <p className="text-primary-foreground">Situs Web Kami</p>
          <ul className="space-y-6 text-primary">
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="http://ptmitrajaya.com"
              >
                Profil Perusahaan
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="http://mysekuriti.com"
              >
                Aplikasi MySekuriti
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="http://korwil.mysekuriti.com"
              >
                Aplikasi Korwil
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm space-y-7">
          <p className="text-primary-foreground">Aplikasi Kami</p>
          <ul className="space-y-6 text-primary">
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.ddev.mysecurityklien"
              >
                MySekuriti Client
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.ddev.mysecuritykorwil"
              >
                MySekuriti Korwil
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.mysecurity_personil"
              >
                MySekuriti Personil
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="space-y-8 md:flex md:items-center md:space-y-0 md:justify-between">
        <a
          href="http://ptmitrajaya.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#B6B9CE] text-xs hover:underline"
        >
          Copyright @ 2024 PT Mitra Jaya Arya Sanika
        </a>
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
