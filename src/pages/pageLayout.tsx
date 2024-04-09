import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface PagesLayoutProps {
  children: ReactNode
}

const PageLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white dark:to-gray-900 dark:from-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
