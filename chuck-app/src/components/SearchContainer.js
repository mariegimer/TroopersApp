import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Gif from "./Gif";


class SearchContainer extends Component {


    constructor() {
        super();
        this.state = {
            value: [],
            url: []
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                this.setState({url: response.data.url})
                this.setState({value: response.data.value})
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

                <div className="result">
                    <p><strong>The punchline is : </strong> {this.state.value}</p>
                    <p><strong>URL :</strong>  {this.state.url}</p>
                    <Gif/>
                </div>

                <footer>
                    <p>© Marie Gimer 2018</p>
                </footer>
            </div>
        )
    }

}

export default SearchContainer;