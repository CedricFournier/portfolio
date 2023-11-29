import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { auth } from '../../firebase.config';

function Header() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = async () => {
        try {
          await signOut(auth)
          navigate("/")
        } catch {
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    return (
      <header>
        <nav className="main-nav">             
            <Link className="main-nav-logo" to="/">
                <h1>Fournier Cédric</h1>
            </Link>
            <div>
            {user ?
                <div>
                    <Link className="main-nav-item" to="/admin">
                    <i className="fa fa-user-circle"></i>
                    <span>admin</span>
                    </Link>
                    <Link className="main-nav-item" onClick={logOut} to="/">
                    <i className="fa fa-sign-out"></i>
                    <span> Sign Out</span>
                    </Link>
                </div> 
                :
                <Link className="main-nav-item" to="/Signin">
                    <i className="fa fa-user-circle"></i>
                    <span> Sign in</span>
                </Link> 
            }
            </div>
        </nav>
      </header>
    )
  }
  
  export default Header