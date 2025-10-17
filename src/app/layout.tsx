import { Montserrat, Playfair_Display,  Meow_Script } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ReactQueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navigation } from "@/components/Navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { ApplicationProvider } from "@/providers/ApplicationProvider";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <title>By Tia Maria Beauty - Professional Brow & Beauty Services</title>
        <meta name="description" content="By Tia Maria Beauty - Professional brow artistry and beauty services. Expert brow shaping, tinting, lamination, lash lifting, and microblading in a boutique setting." />
        <meta name="keywords" content="brow artistry, microblading, brow shaping, lash lifting, beauty services, Tia Maria" />
      </head>
      <body className={`${montserrat.variable} ${playfairDisplay.variable} ${meowScript.variable} bg-pageBg`} >
        <ApplicationProvider>
          <ReactQueryProvider>
            <Suspense>
              <Toaster />
              <ThemeProvider>
                <div className="min-h-screen">
                  <Navigation />
                  <main className="mt-[60px] min-h-screen bg-pageBg">
                    {children}
                  </main>
                  <Footer />
                </div>
              </ThemeProvider>
            </Suspense>
          </ReactQueryProvider>
          <Analytics />
        </ApplicationProvider>
      </body>
    </html>
  );
}
