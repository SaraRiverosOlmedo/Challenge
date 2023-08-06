import React  from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from "../Context/LoginProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";



const NavBar = () => {  


  const {
    firebaseUser,
    signOff,
  } = React.useContext(LoginContext);

  return (
    <header className="container flex flex-wrap py-2">
        
          <nav className="relative flex md:flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded-xl">
            <div className="containerNavbar">
                  <div className="w-8/12 sm:w-4/12 px-4">
                  <img src="https://images.jumpseller.com/store/luna-pets/store/logo/logo_2.png?1682603062" alt="logo" className="mx-auto logoEmpresa" style={{ width: '200px', height: 'auto', margin:'25px'}} />
                  </div>
                <ul className="d-flex flex-row mb-3">
                    {
                      firebaseUser !== null ? (
                    
                    <li className="nav-item">
                    <Link to = {`/`}
                        className="px-4 py-2 flex items-center ms:text-xs md:text-xs lg:text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={()=> signOff()}
                      >
                       <button className='btnSalir'>Salir</button>
                      </Link>
                    </li>
                      ) : ('')
                    }
                </ul>
              
            </div>
          </nav>
    </header>
  );
}


export default NavBar;