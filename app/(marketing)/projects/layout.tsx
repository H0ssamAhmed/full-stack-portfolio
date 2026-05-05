import { ThemeProvider } from '@/components/ui/ThemeProvider'
import React from 'react'
import MainNavbar from '../_components/MainNavbar';


export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <MainNavbar />

            {children}
        </ThemeProvider>
    )
}
