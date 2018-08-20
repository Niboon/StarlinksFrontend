import React, {Component} from 'react';
import {FaTrash, FaLink} from 'react-icons/fa';
import "../stylesheets/Body.css"

class StarWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreenStyle: {display: 'none'},
            fullScreenSrc: '',
        };
    }


    getStarGrid() {
        const stars = this.props.stars;
        if (stars.length>0){
            return stars.map((star, index) => {
                if (index < this.props.maxStars)
                    return this.getStarElement(star, index)
            });
        }
        return (
            <div>
                User #{this.props.user} hasn't linked any Stars
            </div>
        );
    }

    getStarElement(star, index) {
        const style = {backgroundImage: `url(${star.img}`};
        return (
            <span className="star" style={style} onClick={this.showFullScreen.bind(this,star.img)} key={index}>
                <a href={star.link} target="_blank" onClick={StarWall.handleLinkClick}>
                    {star.name}
                </a>
                <span className="delete" onClick={this.deleteStar.bind(this,star.id)}>
                    <FaTrash/>
                </span>
                <span className="link" onClick={this.generateLink.bind(this,star.id)}>
                    <FaLink/>
                </span>
            </span>
        );
    }

    getFullScreenImage() {
        return (
            <div id="overlay" style={this.state.fullScreenStyle} onClick={this.hideFullScreen.bind(this)}>
                <img src={this.state.fullScreenSrc} alt={this.state.fullScreenSrc}/>
            </div>
        )
    }

    showFullScreen(src, event) {
        this.setState({
            fullScreenStyle: {display: 'block'},
            fullScreenSrc: src,
        });
    }

    hideFullScreen(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            fullScreenStyle: {display: 'none'},
        });
    }

    deleteStar(id, event) {
        console.log(id);
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteStar(id);
    }

    generateLink(id, event) {
        console.log(id);
        event.preventDefault();
        event.stopPropagation();
    }

    static handleLinkClick(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <div >
                {this.getStarGrid()}
                {this.getFullScreenImage()}
            </div>
        );
    }
}

export default StarWall;