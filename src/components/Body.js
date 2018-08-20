import React, {Component} from 'react';
import UserContext from '../contexts/UserContext'
import StarWall from "./StarWall";

const starsPerPage = 9;

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxStars: starsPerPage,
            fullScreenStyle: {display: 'none'},
            fullScreenSrc: '',
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
        ) {
            this.setState({maxStars: this.state.maxStars + starsPerPage});
        }
    };

    render() {
        return (
            <UserContext.Consumer>
                {(ctx) =>
                    <StarWall
                        user={ctx.user}
                        stars={ctx.stars}
                        deleteStar={ctx.deleteStar}
                        maxStars={this.state.maxStars}
                    />
                }
            </UserContext.Consumer>
        );
    }
}

export default Body;