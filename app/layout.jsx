import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} font-primary bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
