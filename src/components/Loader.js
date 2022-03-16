import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="loader">
        <FontAwesomeIcon icon={faSpinner}/>
        <h2>Cargando...</h2>
    </div>
  )
}

export default Loader