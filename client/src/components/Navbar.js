import logo from "../assets/Rails.svg"
import { Link, NavLink } from "react-router-dom"

export default function NavBar({currentUser, logout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => logout());
    }

    return(
        <>

            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <div className="container-fluid justify-content-evenly align-center nav-bg">
                <div className="d-flex nav-bg">
                <Link className="navbar-brand me-2 mb-1 d-flex align-items-center nav-bg" to="/">
                    <img className="nav-bg"
                    src={ logo }
                    height="80" 
                    alt="logo"
                    loading="lazy"
                    />
                </Link>
                </div>

                <ul className="navbar-nav flex-row nav-bg">
                    <li className="nav-item me-3 me-lg-1 nav-bg">
                    <NavLink className="nav-link d-sm-flex align-items-sm-center nav-bg" to="/">
                    <span className="nav-bg"><i className="fa fa-home fa-lg nav-bg user-icon"></i></span>
                    <span className="d-none d-sm-block ms-1 nav-bg user"> Home</span>                
                    </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav flex-row d-none d-md-flex nav-bg">
                <li className="nav-item me-3 me-lg-1 nav-bg">

                <form className="input-group w-auto my-auto d-none d-sm-flex nav-bg">
                <input
                autoComplete="off"
                type="search" 
                name="search"
                className="form-control rounded"
                placeholder="Im searching for..."
                />
                </form>

                </li>

               
                </ul>

                <ul className="navbar-nav flex-row nav-bg">
                {
                    currentUser ? 
                    <ul className="navbar-nav flex-row nav-bg">
                        <li className="nav-item me-3 me-lg-1 nav-bg">
                        <NavLink className="nav-link d-sm-flex align-items-sm-center nav-bg" to="/profile">
                        <span className="nav-bg"><i className="far fa-user fa-lg nav-bg user-icon"></i></span>
                        <span className="d-none d-sm-block text-capitalize ms-1 nav-bg user"> Hi, {currentUser.username}</span>                    
                        </NavLink>
                        </li>

                        <li className="nav-item me-3 me-lg-1 nav-bg">
                        <NavLink className="nav-link d-sm-flex align-items-sm-center nav-bg" to="/product/new">
                        <span className="nav-bg"><i className="fa fa-add fa-lg nav-bg user-icon"></i></span>
                        <span className="d-none d-sm-block ms-1 nav-bg user"> Add Product</span>                    
                        </NavLink>
                        </li>
                        
                        <li className="nav-item me-3 me-lg-1 nav-bg">
                            <button onClick={handleLogout} style={{fontSize: "18px", fontWeight: "bold"}} className="btn btn-light btn-outline-light btn-sm nav-link d-sm-flex text-capitalize text-light align-items-sm-center nav-bg" >Logout</button>
                        </li>
                    </ul>
                :

                    <ul className="navbar-nav flex-row nav-bg">
                        <li className="nav-item me-3 me-lg-1 nav-bg">
                        <NavLink className="nav-link d-sm-flex align-items-sm-center nav-bg" to="/login">
                        <span className="nav-bg"><i className="far fa-user fa-lg nav-bg user-icon"></i></span>
                        <span className="d-none d-sm-block ms-1 nav-bg user"> Log In</span>                
                        </NavLink>
                        </li>

                        <li className="nav-item me-3 me-lg-1 nav-bg">
                        <NavLink className="nav-link d-sm-flex align-items-sm-center nav-bg" to="/register">
                        <span className="nav-bg"><i className="far fa-user fa-lg nav-bg user-icon"></i></span>
                        <span className="d-none d-sm-block ms-1 nav-bg user"> Register</span>                
                        </NavLink>
                        </li>
                    </ul>
            
                }
                </ul>
            </div>
            </nav>
        </>
    )
}