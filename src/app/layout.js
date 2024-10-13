// layout.js
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
