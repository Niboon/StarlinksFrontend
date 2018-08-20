import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';
import '../stylesheets/Header.css';
import StringRes from "../resources/strings.json"

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};

        this.onSearchChanged = this.onSearchChanged.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchChanged(event) {
        this.setState({value: event.target.value});
    }

    onSearchSubmit(event) {
        event.preventDefault();
        alert("Searching for " + this.state.search);
    }

    render() {
        return (
            <form onSubmit={this.onSearchSubmit}>
                <input type="text" className="search-box" placeholder={StringRes.search} onChange={this.onSearchChanged} />
                <FaSearch className="btn logo" onClick={this.onSearchSubmit}/>
            </form>
        );
    }
}

export default SearchBox;
