import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oooops!!</h2>
            <p>La page que vous essaye daccedez n'ai pas disponible</p>
            <Link to={'/'}>Allez a la page d'acceuil</Link>
        </div>
     );
}
 
export default NotFound;