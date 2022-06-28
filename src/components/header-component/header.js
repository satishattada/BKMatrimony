import React, { Component } from 'react';
import bk from '../../../assets/bk-logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="bk-logo" src={bk} alt=" " />

            </div>
        );
    }
}

export default Header;