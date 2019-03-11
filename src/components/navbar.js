import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <Link className="navbar-brand" to='/'> Jam Pack </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to='/'> Home <span className="sr-only">(current)</span></Link>
            </div>
        </div>
    </nav>)



}

export default Navbar;