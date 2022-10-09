import './style.css'

const ListOfNames = ({ names, setNames }) => {

  const handleClick = (name) => {

    //* Filter the array "names" to delete the name clicked by the user
    const newListOfNames = names.filter(nameInArray => nameInArray !== name)
    setNames(newListOfNames)
  }

  return (
    <div className="app_form_list-names">
      {names.map((name) => (
        <div key={name} className='app_form_data-name'>
          <p className='app_form_name'>{name}</p>
          <button onClick={() => handleClick(name)} className='app_form_delete-name-button'>
            ✖
          </button>
        </div>
      ))}
    </div>
  )

}

export default ListOfNames