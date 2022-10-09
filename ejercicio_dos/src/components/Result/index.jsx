import './style.css'

const Result = ({ data }) => {
  
  return (
    <article className='app_form_results'>
      {data && data?.map(result => (
        <div key={result.name} className='app_form_div-result'>
          <p>Nombre: {result.name}</p>
          <p>Edad: {`${result.age ? result.age : 'Sin información'}`}</p>
          {
            result.country_id && (<p>ID del país: {result.country_id}</p>)
          }
        </div>
      ))}
    </article>
  )

}

export default Result