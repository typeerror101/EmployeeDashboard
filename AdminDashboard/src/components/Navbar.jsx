import PropTypes from 'prop-types';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div className='Navbar'>
      <nav className='nav'>
         <Link to="" className='logo' >EMP X</Link>
        <ul className='nav-middle'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/emplist'>Employee List</CustomLink>
        </ul>
        <ul>
            <Link to='/' className='logout'>Logout</Link>
        </ul>
          
      </nav>
    </div>
  )
}

function CustomLink({ to, children, ...prop }) {
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: ResolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...prop}>
                {children}
            </Link>
        </li>
    );
}

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };


export default NavBar;