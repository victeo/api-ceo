"use client"

import './globals.css'
import { Inter } from 'next/font/google';
import Head from '../../components/theme/components/CustomHead'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <Head title={'API - CEO'} />
            <body className='body'>
                {children}
            </body>
        </html>
    )
}
