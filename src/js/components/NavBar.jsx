import React from "react"

const NavBar = () => {
    return(
        <div className="mainContainer">
            <nav className="navbar bg-body-tertiary fixed-top py-4 bg-secondary-subtle">
                <div className="container-fluid d-flex">
                    <span className="ms-5">Start Bootstrap!</span>
                    <div className="navBarContainer d-flex gap-4 me-5">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">About</a>
                        <a href="#" className="nav-link">Services</a>
                        <a href="#" className="nav-link">Contact</a>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;