import React, {Component} from 'react';
import {FaGithub} from 'react-icons/fa';
import '../stylesheets/Header.css';
import StringRes from "../resources/strings.json"
import {formatQuery} from "../utils";

class Login extends Component {

    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick() {
        const { clientId, redirectUri } = this.props;
        const search = formatQuery({
            client_id: clientId,
            user: 'email' ,
            redirect_uri: redirectUri,
        });

        window.location.href = `https://github.com/login/oauth/authorize?${search}`;
    }

    render() {
        return (
            <span className="btn login-pair" title="Login with Github" onClick={this.onBtnClick}>
                <FaGithub className="login-logo"/>
                <span className="login-label">{StringRes.login}</span>
            </span>
        );
    }

}

export default Login;
