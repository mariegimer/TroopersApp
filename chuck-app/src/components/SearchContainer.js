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

    handleClick() {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({username: response.data.value})
            })
    };


    render() {
        return (
            <div>
                <div className="search-container">
                    <form action="#">
                        <input type="text" placeholder="Search.." onChange={this.searchBar} name="search" />
                        <button onClick={this.handleClick()}>Rechercher</button>
                        </form>
                </div>

                    <p>{this.state.username}</p>
                <Results/>
            </div>
        )
    }

}

export default SearchContainer;