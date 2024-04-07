import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import { AppbarClient } from "../components/AppbarClient";
import { Providers } from "../provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wallet",
  description: "a simple wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
     
    
      <Providers>
      <body className={inter.className}>
      
       {children}
       
        <AppbarClient/>
        </body>
      </Providers>
      
    
      
    
  
    
    </html>
  );
}
