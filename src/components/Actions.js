import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FaPortrait, FaPlus} from 'react-icons/fa';
import '../stylesheets/Header.css';
import Login from "./Login";

function validateUser(user) {
    return (user !== 0);
}

class Actions extends Component {
    render() {
        let actions = [];
        if (validateUser(this.props.user)) {
            actions.push(<FaPlus className="btn logo" key="add"/>);
            actions.push(<FaPortrait className="btn logo" key="profile"/>);
        } else {
            actions.push(
                <Login
                    clientId="8830bb5e86c0911377e0"
                    redirectUri="http://www.niboon.com/starlinks"
                    updateUser={this.props.updateUser}
                    key="profile"
                />
            );
        }
        return actions;
    }
}

Actions.propTypes = {
    user: PropTypes.number,
    updateUser: PropTypes.func
};

Actions.defaultProps = {
    user: ''
};


export default Actions;
