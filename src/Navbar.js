import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">Bproo Blog</Link>
      </div>
      <ul className="liens">
        <li>
          <Link to="/" className="lien">Acceuil</Link>
        </li>
        <li>
          <Link to="/ajouter" className="lien buttonArticle" >Creer Article</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
