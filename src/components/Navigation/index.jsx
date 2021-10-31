import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

Navigation.propTypes = {

};

function Navigation(props) {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;