import React, {Component} from 'react';
import {FaStar} from 'react-icons/fa';
import '../stylesheets/Header.css';
import UserContext from '../contexts/UserContext'
import Actions from "./Actions";
import SearchBox from "./SearchBox";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <span className="header-left">
                    <FaStar className="btn logo"/>
                </span>
                <span className="header-middle">
                    <SearchBox/>
                </span>
                <span className="header-right">
                    <UserContext.Consumer>
                        {({...values}) => <Actions {...values}/>}
                    </UserContext.Consumer>
                </span>
            </header>
        );
    }
}

export default Header;
