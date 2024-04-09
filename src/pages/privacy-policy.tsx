import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivacyPolicy from '../components/PrivacyPolicy'

export default function PrivacyPolicyPage() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-300 to-white dark:to-gray-900 dark:from-black">
      <Header />
      <main className="flex-grow">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
