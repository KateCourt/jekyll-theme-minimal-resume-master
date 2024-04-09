import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MissionStatement from '../components/MissionStatement'
import Models from '../components/Models'
import Partners from '../components/Partners'
import SignUp from '../components/SignUp'

export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-300 to-white dark:to-gray-900 dark:from-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MissionStatement />
        <About />
        <Partners />
        <Models />
        <SignUp />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
