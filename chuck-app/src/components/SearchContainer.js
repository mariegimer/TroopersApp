import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Results from "./Results";


class SearchContainer extends Component {


    constructor() {
        super();
        this.state = {username: []};

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({username: response.data.value})
            })
    };


    render() {
        return (
            <div>
                <div className="search-container">
                    <form action="#" method="get">
                        <input type="text" placeholder="Search.." onChange={this.searchBar} name="search" />
                        <button >Rechercher</button>
                    </form>
                </div>
                <button className="click" onClick={this.handleClick}>Click Moi !</button>

                <p className="result">{this.state.username}</p>
                <Results/>
            </div>
        )
    }

}

export default SearchContainer;