import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import ImgCarousel from "./components/ImgCarousel"
import Main from "./components/Main"
import Custom from "./components/Custom"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"


function App() {


  return (
    <>
      <Header />
      <main>
      <Hero />
      <ImgCarousel />
      <Custom />
      <Main />
      <Testimonials />
      <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App


