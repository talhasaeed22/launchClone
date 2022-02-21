import React from 'react'
import '../App.css'
import { useLocation, Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            {/* <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-dark" style={{ marginRight: '65px', fontSize: '1.6rem' }} to="/" aria-disabled>Launch</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item mx-4">
                                    <Link className={`nav-link  ${location.pathname === '/' ? "active" : " "}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-dark mx-2" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/Features' ? "active" : ""}`} to="/Features">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.pathname === '/Pricing' ? "active" : ""}`} href="/Pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.pathname === '/About' ? "active" : ""}`} href="/About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.pathname === '/Contact' ? "active" : ""}`} href="/Contact">Contact</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn mx-2" id='signin' type="submit">Sign In</button>
                                <button className="btn mx-2" id='register' type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div> */}

            <nav className="navbar navbar-expand-lg navbar-light navigation">
                <div className="container-fluid">
                    <Link style={{fontFamily: "'Baloo Bhai 2', cursive",fontSize:'1.9rem' , fontWeight:'bolder'}} className="navbar-brand mx-5"  to="/">Launch</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className=" mx-2 nav-item">
                                <Link className={`nav-link  ${location.pathname === '/' ? "active" : " "}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className=" mx-2 nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className={`nav-link  ${location.pathname === '/Features' ? "active" : " "}`} aria-current="page" to="/Features">Features</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className={`nav-link  ${location.pathname === '/Pricing' ? "active" : " "}`} aria-current="page" to="/Pricing">Pricing</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className={`nav-link  ${location.pathname === '/About' ? "active" : " "}`} aria-current="page" to="/About">About</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className={`nav-link  ${location.pathname === '/Contact' ? "active" : " "}`} aria-current="page" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <button className="btn mx-2" id='signin' type="submit">Sign In</button>
                                <button className="btn mx-2" id='register' type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar