export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './animations.css';
import { AuthProvider } from "@/components/contexts/children/authContext";
import Notification from "@/components/mini-components/notification";

export const metadata: Metadata = {
  title: "YipYap | Conversations",
  description: "doChat is a modern chat application that allows you to connect with friends and family seamlessly.",
  icons: '/favicon.ico'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212] h-screen relative">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

