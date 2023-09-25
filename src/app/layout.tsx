"use client"

import './globals.css'
import { Inter } from 'next/font/google';
import Container from "react-bootstrap/Container";
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
                <Container>
                    {children}
                </Container>
            </body>
        </html>
    )
}
