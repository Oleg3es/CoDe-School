import Container from './components/Сontainer'
import Header from './components/Header'
import Hero from './components/Hero'
import { useState } from 'react'
import ModalForm from './components/modal/ModalForm'
import Learning from './components/Learning'
import AboutLearning from './components/AboutLearning'
import Gallery from './components/Gallery'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {

  const [isForm, setIsForm] = useState<boolean>(false)

  return (
    <>
      <Container>
        <Header />
        <Hero onOpen={() => setIsForm(true)} />
      </Container>
      <Learning />
      <Container>
        <AboutLearning />
        <Gallery />
        <Map />
        <Footer />
      </Container>

      <ModalForm isForm={isForm} onClose={() => setIsForm(false)} />
    </>
  )
}

export default App
