import type { Viewport } from "next";
import Providers from "./providers/providers";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "./theme";
import { Notifications } from "@mantine/notifications";
import PWARegister from "./_pwa_register";

export const metadata = {
  title: "Eco Clean",
  applicationName: "Eco Clean",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Eco Clean",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#4eb220",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${playfair.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications position="top-right" />
          <QueryProvider>
            <PWARegister />
            <Providers>{children}</Providers>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
