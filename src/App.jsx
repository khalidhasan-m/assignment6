import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Hero2 from './components/Hero2/Hero2'
import Hero3 from './components/Hero3/Hero3'
import Hero4 from './components/Hero4/Hero4'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Stats from './components/Stats/Stats'
// import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Hero2/>
      <Cards/>
      <Hero3/>
      <Pricing/>
      <Hero4/>
      <Footer/>
    </>
  )
}

export default App
