import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers/theme-provider"

const roboto = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Chatss: Let's you chat to anyone, anytime, anywhere. ( anonymously )",
  description: "Let's you chat to anyone, anytime, anywhere. ( anonymously )",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
