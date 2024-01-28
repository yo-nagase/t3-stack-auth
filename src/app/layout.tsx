import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getAuthSession } from "@/lib/nextauth"
import AuthProvider from "@/components/providers/AuthProvider"
import TrpcProvider from "@/components/providers/TrpcProvider"
import ToastProvider from "@/components/providers/ToastProvider"
import Navigation from "@/components/auth/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "T3Stack入門",
  description: "T3Stack入門",
}

interface RootLayoutProps {
  children: React.ReactNode
}

// レイアウト
const RootLayout = async ({ children }: RootLayoutProps) => {
  // 認証情報取得
  const user = await getAuthSession()

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <AuthProvider>
            <TrpcProvider>
              <Navigation user={user} />
              <ToastProvider />

              <main className="container mx-auto max-w-screen-md flex-1 px-2">
                {children}
              </main>

              {/* フッター */}
              <footer className="py-5">
                <div className="text-center text-sm">
                  Copyright あああ© All rights reserved |{" "}

                  🐳サンプルアプリケーション

                </div>
              </footer>
            </TrpcProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout