import './style.css'

const Result = ({ data }) => {
  console.log(data)
  return (
    <article className='app_form_results'>
      {data && data?.map(result => (
        <div key={result.name} className='app_form_div-result'>
          <p>Name: {result.name}</p>
          <p>Age: {result.age}</p>
          {
            result.country_id && (<p>Country id: {result.country_id}</p>)
          }
        </div>
      ))}
    </article>
  )

}

export default Result