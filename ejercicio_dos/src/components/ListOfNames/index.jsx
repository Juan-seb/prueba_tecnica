import './style.css'

const ListOfNames = ({ names, setNames }) => {

  const handleClick = (name) => {

    const newListOfNames = names.filter(nameInArray => nameInArray !== name)
    setNames(newListOfNames)
  }

  return (
    <div className="app_form_div-list-names">
      <p>Lista de nombres:</p>
      {names.map((name) => (
        <div key={name}>
          <p>{name}</p>
          <button onClick={() => handleClick(name)}>
            borrar
          </button>
        </div>
      ))}
    </div>
  )

}

export default ListOfNames