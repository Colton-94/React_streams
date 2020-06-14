import React from 'react';
import { Link } from 'react-router-dom';
import Google from './Google';

const Header=()=>{
    return (
        <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    streams
                </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    allStreams
                </Link>
                <Google />


            </div>

        </div>
    );
};

export default Header;
