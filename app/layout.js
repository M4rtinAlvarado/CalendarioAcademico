import "./globals.css";


import { Providers } from "@/app/providers/provider"
import { League_Spartan } from "next/font/google"

const lspartan = League_Spartan({
  subsets:['latin']
})


export const metadata = {
  title: "Calendario Académico",
  description: "Calendario académico para la UACh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lspartan.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
