// layout.js
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
      </body>
    </html>
  );
}
