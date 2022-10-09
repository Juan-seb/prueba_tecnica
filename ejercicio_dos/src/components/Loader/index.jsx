import './style.css';
/*Componente que se encargara de renderizar el loader cuando se tengan distintas peticiones */
const Loader = () => {
    return (
        <div className='loader_container'>   
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader