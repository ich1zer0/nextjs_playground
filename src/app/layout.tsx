import './globals.css'

export const metadata = {
  title: 'nextjs playground',
  description: 'nextjs playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
