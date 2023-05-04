import '../globals.css'

export const metadata = {
  title: 'Engine Control App',
  description: 'Gerenciamento de controle de qualidade de ferramentas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <h2>cachorra</h2>
      <body>{children}</body>
    </html>
  )
}
