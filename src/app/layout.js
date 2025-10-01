import ChowdeckFooter from "@/components/NavFootComp/Footer";
import "./globals.css";
import Navbar from "@/components/NavFootComp/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <ChowdeckFooter />
            </body>
        </html>
    );
}
