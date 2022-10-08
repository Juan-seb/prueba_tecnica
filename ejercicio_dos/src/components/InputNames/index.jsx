import { useState } from 'react'
import './style.css'

const InputNames = ({ names, setNames }) => {

  const [inputName, setInputName] = useState({
    value: ''
  })

  const [errorName, setErrorName] = useState(false)

  const handleChange = (e) => {

    const value = e.target.value
    const lastCharacter = value.charAt(value.length - 1)
    const name = value.substring(0, value.length - 1)
    const regexName = /^[a-zA-Z]+$/

    if (!(lastCharacter === ',')) {
      setInputName({ value })
      return
    }

    console.log(regexName.test(name))
    if (!(regexName.test(name))) {

      setErrorName(true)

      setInterval(() => {
        setErrorName(false)
      }, 1000);

      return
    }

    setNames([...names, name])
    setInputName({
      value: ''
    })


  }

  const handleBlur = (e) => {

    const value = e.target.value
    const regexName = /^[a-zA-Z]+$/

    if (value === '') return

    if (!(regexName.test(value))) {

      setErrorName(true)

      setInterval(() => {
        setErrorName(false)
      }, 1000);

      return
    }

    setNames([...names, value])
    setInputName({
      value: ''
    })

  }

  return (
    <section>
      <article className='app_form_article'>
        <label htmlFor="input_names">Ingresa aqui los nombres:</label>
        <input
          type="text"
          className="app_form_input"
          name="input_names"
          value={inputName.value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </article>
      {errorName && <p>No se admiten campos vacios, ni espacios, ni caracteres especiales</p>}
    </section>
  )

}

export default InputNames