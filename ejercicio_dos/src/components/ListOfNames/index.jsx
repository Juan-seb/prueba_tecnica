const ListOfNames = ({ names, setNames }) => {

  const handleClick = (name) => {

    const newListOfNames = names.filter(nameInArray => nameInArray !== name)
    setNames(newListOfNames)
  }

  return (
    <article>
      <p>Lista de nombres:</p>
      {names.map((name) => (
        <div key={name}>
          <p>{name}</p>
          <button onClick={() => handleClick(name)}>
            borrar
          </button>
        </div>
      ))}
    </article>
  )

}

export default ListOfNames