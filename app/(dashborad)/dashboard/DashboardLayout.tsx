import { ThemeProvider } from '@/components/ui/ThemeProvider';
import React from 'react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        <body className="min-h-full flex flex-col">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </body>

    );
}
