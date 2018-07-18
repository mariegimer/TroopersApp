import React, { Component } from 'react';
import '../App.css';
import Gif from '../../public/img/chuck-gif.gif';

class Results extends Component {

    render() {
        return (
            <div>
                <img src={Gif} />
            </div>
        )
    }

}

export default Results;