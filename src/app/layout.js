import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ariedez",
  description: "Empowering your business with cloud and digital solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar always on top */}
        <Navbar />

        {/* Page content (dynamic children) */}
        <main className="flex-grow">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
