import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {UserProvider} from "./contexts/UserContext";
import {formatParams} from "./utils";

ReactDOM.render(
    <UserProvider token={getCode()}>
        <App/>
    </UserProvider>
    , document.getElementById('root')
);

function getCode() {
    const params = formatParams(window.location.search.replace(/^\?/, ''));
    console.log(params);
    let code = params.code;
    if (!code) {
        return 0;
    }else {
        return code;
    }
}

registerServiceWorker();
