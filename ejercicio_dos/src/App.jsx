import { useState } from 'react'
import InputNames from './components/InputNames'
import './App.css'

function App() {

  const [names, setNames] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <main className="app">
      <section className='app_container'>
        <h2 className='app_title'>Predictor de edad</h2>
        Instrucciones:
        <ul>
          <li className='app_li'>Puedes ingresar cuantos nombres desees separados por comas (',') o un unico nombre</li>
          <li className='app_li'>El campo localización es opcional por lo tanto no es necesario que marques el país.</li>
          <li className='app_li'>Los nombres deben ser unicos, es decir no puedes ingresar: Juan Sebastian</li>
        </ul>
        <form className='app_form' onSubmit={handleSubmit}>
          <main>
            <InputNames names={names} setNames={setNames} />
          </main>
        </form>
      </section>
    </main>
  )
}

export default App
