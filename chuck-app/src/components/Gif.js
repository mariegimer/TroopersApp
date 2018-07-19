import React, { Component } from 'react';
import '../App.css';
import GifChuck from '../../public/img/chuck-gif.gif';

class Gif extends Component {

    render() {
        return (
            <div>
                <img src={GifChuck}  className="gif"/>
            </div>
        )
    }

}

export default Gif;