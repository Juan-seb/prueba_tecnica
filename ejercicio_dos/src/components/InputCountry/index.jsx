import { isoCountries } from './iso_country'
import './style.css'

const InputCountry = ({ setCountry }) => {

  const handleChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <article className='app_form_article-select'>
      <select name="country" className='app_form_select-country' placeholder="Hola" onChange={handleChange}>
        <option value="">Localización: Selecciona tu país</option>
        <option value="">Sin país</option>
        {
          Object.entries(isoCountries).map(country => (
            <option
              value={country[0]}
              key={country[0]}
            >
              {country[0]} - {country[1]}
            </option>
          ))
        }
      </select>
    </article>
  )

}

export default InputCountry