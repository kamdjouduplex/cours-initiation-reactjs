import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div >
                <Link className="logo" to="/">Bproo Blog</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link className="active" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Creer Un Article</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;