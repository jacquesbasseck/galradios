import React from "react"
import { Link } from "react-router-dom";
import './Header.css'
import { HouseFill } from "react-bootstrap-icons";

const Header = () => {

    const handleClick = (e) => {
        console.log(e.target.parentNode)

        document.querySelectorAll('nav li').forEach(function(link) {
            link.classList.toggle('active', false)
        })
        e.target.parentNode.classList.add("active")
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Ninth navbar example">
                <div className="container-xl">
                    <ul>
                        <li>
                            <Link to="/" onClick={handleClick}>
                                <HouseFill size={30} className="senegal-menu" style={{ color: '#043927'}} />
                            </Link>
                        </li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={handleClick}>
                                <Link to="/contact"className="senegal-menu">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <Link to="/about" className="senegal-menu">
                                    A propos
                                </Link>
                            </li>
                        </ul>
                        {/* <form data-children-count="1">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </form> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header