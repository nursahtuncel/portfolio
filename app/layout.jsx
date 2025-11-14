import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} font-primary bg-primary text-white antialiased`}>
      <Header />
      <PageTransition >      
       <StairTransition/>
        {children}
      </PageTransition>
      </body>
    </html>
  );
}
