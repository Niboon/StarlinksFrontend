import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({
    user: '',
    stars: [],
    updateUser: ()=>{},
});

const host = `http://localhost:4000/graphql`;

export class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.getUser(props.token);
        this.updateUser = this.updateUser.bind(this);
        this.deleteStar = this.deleteStar.bind(this);
        this.state = {
            user: 0,
            stars: [],
            updateUser: this.updateUser,
            deleteStar: this.deleteStar
        };
    }

    getUser(code) {
        const url = `${host}?query={user(token:%22${code}%22){id}}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                const id = data.data.user.id;
                console.log(id);
                if (id === 0) {
                    this.addUser(code)
                } else {
                    this.fetchData(id);
                }
            })
            .catch(e => console.log(e));
    }

    addUser(token) {
        const url = `${host}?query=mutation{add_user(token:%22${token}%22){id,token}}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                const id=data.data.id;
                console.log(id);
                this.fetchData(id);
            })
            .catch(e => console.log(e));
    }

    fetchData(id) {
        const url = `${host}?query={user(id:${id}){stars{id%20name%20user_id%20img%20link}}}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                console.log("Inside FetchData");
                console.log(data.data.user.stars);
                this.setState({user:id, stars:data.data.user.stars});
            })
            .catch(e => console.log(e));
    }

    deleteStar(id) {
        const url = `${host}?query=mutation{delete_star(id:${id}){id, name, user_id, img, link}}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                console.log("Deleted Star#" + id);
                console.log(data);
                console.log(this.state.user);
                this.fetchData(this.state.user);
            })
            .catch(e => console.log(e));
    }

    updateUser(id) {
        this.setState({user: id});
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

UserProvider.propTypes = {
    token: PropTypes.string,
};

UserProvider.defaultProps = {
    token: '',
};

export default UserContext;