import { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import AuthProvider from "./(components)/AuthProvider";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className="bg-gray-200">
        <Navbar/>
        <div className="m-2 p-5">
          {children}
        </div>
      </body>
      </AuthProvider>
    </html>
  );
}
