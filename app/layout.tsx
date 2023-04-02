import MainNav from "./components/MainNav";
import "./globals.css";

export const metadata = {
  title: "R6 tools",
  description: "R6 tools",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380127333839117"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="h-screen flex flex-col md:flex-row overflow-hidden">
        <header>
          <MainNav />
        </header>
        <main className="flex-grow max-h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
