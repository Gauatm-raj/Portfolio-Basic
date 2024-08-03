
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About/About'
import Contact from './component/Contacts/Contact'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import Navbars from './component/Nav/Navbar'
import Project from './component/Projects/Project'

function App() {
  

  return (
    <>
      <Navbars/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
