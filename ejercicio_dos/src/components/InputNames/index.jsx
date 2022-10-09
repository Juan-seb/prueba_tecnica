import { useState } from 'react'
import ListOfNames from '../ListOfNames'
import './style.css'

const InputNames = ({ names, setNames }) => {

  const [inputName, setInputName] = useState({
    value: ''
  })

  const [errorText, setErrorText] = useState("")

  const handleChange = (e) => {

    const value = e.target.value
    //* Gets the last character of the value
    const lastCharacter = value.charAt(value.length - 1)
    //* Gets the string of the input except for the last character
    const name = value.substring(0, value.length - 1)
    //* Regular expression to validate the entered names of the input
    const regexName = /^[a-zA-Z]+$/

    if (!(lastCharacter === ',')) {
      setInputName({ value })
      return
    }

    //* Validate that the value of the inpur is greater than two, doesnt exist in the array "names" and match with the regex expression
    if (!(regexName.test(name)) || name.length < 2 || names.find(nameInArray => nameInArray === name)) {

      setErrorText("El nombre ingresado esta repetido, tiene caracteres especiales ó contiene espacios")

      setInterval(() => {
        setErrorText("")
      }, 3000);

      return
    }

    //* Save the name entered by the user 
    setNames([...names, name])
    setInputName({
      value: ''
    })


  }

  const handleBlur = (e) => {

    const value = e.target.value
    const regexName = /^[a-zA-Z]+$/

    if (value === '') return

    //* Validate that the value of the inpur is greater than two, doesnt exist in the array "names" and match with the regex expression
    if (!(regexName.test(value)) || value.length < 2 || names.find(nameInArray => nameInArray === value)) {

      setErrorText("El nombre ingresado esta repetido, tiene caracteres especiales ó contiene espacios")

      setInterval(() => {
        setErrorText("")
      }, 1000);

      return
    }

    //* Save the name entered by the user 
    setNames([...names, value])
    setInputName({
      value: ''
    })

  }

  return (
    <section>
      <article className='app_form_article-names'>
        {
          names.length > 0 && (
            <ListOfNames names={names} setNames={setNames} />
          )
        }
        <input
          type="text"
          className="app_form_input"
          name="input_names"
          value={inputName.value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ingresa los nombres"
        />
      </article>
      {!(errorText === "") && <p className='app_form_error-text'>{errorText}</p>}
    </section>
  )

}

export default InputNames