import MainNav from "./components/MainNav";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col md:flex-row">
        <header>
          <MainNav />
        </header>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
