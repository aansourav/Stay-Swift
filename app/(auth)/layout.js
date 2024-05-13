import Navbar from "@/components/Navbar";
import { connectDB } from "@/database/service/mongodbConnection";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SuiteSpot",
    description: "Hotel booking made easy",
    image: "/logo.png",
    url: "https://suitespot-aansourav.vercel.app",
    type: "website",
    keywords: ["hotels", "booking", "travel"],
};

export default async function RootLayout({ children }) {
    await connectDB();
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar navMenu={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}
