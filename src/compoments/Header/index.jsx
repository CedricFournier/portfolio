import { Link } from 'react-router-dom';


function Header() {
    return (
      <header>
        <nav className="main-nav">             
            <Link className="main-nav-logo" to="/">
                <h1>Fournier Cédric</h1>
            </Link>
            <div>
            
                <div>
                    <Link className="main-nav-item" to="/User">
                    <i className="fa fa-user-circle"></i>
                    <span>admin</span>
                    </Link>
                    <Link className="main-nav-item" onClick="R" to="/">
                    <i className="fa fa-sign-out"></i>
                    <span> Sign Out</span>
                    </Link>
                </div> 
            
                <Link className="main-nav-item" to="/Signin">
                    <i className="fa fa-user-circle"></i>
                    <span> Sign in</span>
                </Link> 
            
            </div>
        </nav>
      </header>
    )
  }
  
  export default Header