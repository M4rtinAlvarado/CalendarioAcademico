import "./globals.css";
import Image from 'next/image'

// Importamos "Providers": Nos dará acceso a los componentes de Chakra UI
import { Providers } from "@/app/providers/provider"
import { League_Spartan } from "next/font/google"

const lspartan = League_Spartan({
  subsets:['latin']
})


export const metadata = {
  title: "Calendario Académico",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lspartan.className}>
        <header className="Header">
          <a href=""><h1 className="title">CALENDARIO UACH 2023</h1></a>
        </header>
        {/* Envolvemos todo nuestro contenido */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}