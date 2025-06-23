import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Profile',
    description: 'Your profile page'
}

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return children
}