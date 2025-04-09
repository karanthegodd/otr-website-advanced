import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TransitionProvider } from '@/context/TransitionContext';
import CarTransition from '@/components/CarTransition';
import ClientTransitionWrapper from '@/components/ClientTransitionWrapper';
import { AudioProvider } from "@/context/AudioContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OTR Racing',
  description: 'Formula Student Team',
  icons: null
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon;base64,AA" />
        <link rel="apple-touch-icon" href="data:image/x-icon;base64,AA" />
      </head>
      <body className={inter.className}>
        <AudioProvider>
          <TransitionProvider>
            <ClientTransitionWrapper>
              {children}
            </ClientTransitionWrapper>
          </TransitionProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
