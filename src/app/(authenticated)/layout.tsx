import '../globals.css'
import Aside from './components/aside.component';

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
      
      <body>
        <Aside />
        <div className='p-4 sm:ml-64 mt-2 pt-16'>
          {children}
        </div>
      </body>
    </html>
  )
}
