import { useState } from 'react'
import InputCountry from './components/InputCountry'
import InputNames from './components/InputNames'
import ListOfNames from './components/ListOfNames'
import Result from './components/Result'
import './App.css'

function App() {

  const [names, setNames] = useState([])
  const [country, setCountry] = useState('')
  const [data, setData] = useState(null)

  const createUrlNames = (namesToAggregate) => {

    let url = ''

    if (!(namesToAggregate.length > 1)) {
      url = `name=${namesToAggregate[0]}`

      return url
    }

    namesToAggregate.forEach(name => {
      url += `name[]=${name}&`
    })

    return url.substring(0, url.length - 1)
  }

  const createUrlCountry = (countryToAggregateToUrl) => {

    if (countryToAggregateToUrl === '') {
      return ''
    }

    return `&country_id=${countryToAggregateToUrl}`

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setData(null)

    if (names.length === 0) {
      return
    }

    try {
      const data = await fetch(`https://api.agify.io?${createUrlNames(names)}${createUrlCountry(country)}`, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      const res = data.ok ? data.json() : Promise.reject('Error en la petición')
      const json = await res

      if(names.length === 1){
        setData([json])
        return
      }

      setData(json)

    } catch (error) {
      setError(error)
    }

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
            <InputCountry setCountry={setCountry} />
            <input type="submit" value="Predecir edades" />
          </main>
        </form>
        {
          data && (<Result data={data} />)
        }
      </section>
    </main>
  )
}

export default App
