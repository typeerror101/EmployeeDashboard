import { useLocation } from "react-router-dom";
import NavBar from './Navbar'; 
import '../styles/home.css';

function Home() {
  const location = useLocation();

  return (
    <>
    <NavBar/>
    <div className="home">
    {location.state && location.state.id ? (
          <h1>Hello {location.state.id}, Welcome to the Admin Dashboard.</h1>
        ) : (
          <h1>Welcome to the Admin Dashboard.</h1>
        )}
    </div>
    </>
  )
}

export default Home;
