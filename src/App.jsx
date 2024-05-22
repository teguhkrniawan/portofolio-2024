import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Section_Header from './components/Section_Header'
import Section_Content from './components/Section_Content'
import Modal_Img from './components/Modal_Img'

const App = () => {

  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState('')

  const changeModal = () => {
    setOpenModal(!openModal)
  }

  const changeImage = (img) => {
    setImage(img)
  }

  return (
      <div className="bg-body-tertiary py-5">
        <div className="container">
          <Section_Header />
          <Section_Content changeModal={changeModal} changeImage={changeImage} />
          {openModal && <Modal_Img changeModal={changeModal} image={image}/>}
        </div>
      </div>
  )
}

export default App