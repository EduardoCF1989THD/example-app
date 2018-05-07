import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
class App extends Component {

    constructor(){
        super();
        this.state ={
            doors:[],
        }
    }

    buttonClick(e){
        var textBoxValue = document.querySelector('#textBox').value;
        if(textBoxValue != null){
            fetch('http://35.225.213.185/addDoor', {
                method: 'POST',
                body: textBoxValue
            })
        }
    }


    getAllDoors =() => {
        axios.get(`http://35.225.213.185/getAllDoors`)
            .then(response => {
                const  doors = response.data
                this.setState({ doors })
            })
    }

    componentDidMount() {
        this.getAllDoors()
    }


    render() {
        const doorList = this.state.doors.map((door, i) => {
            return (
                <div>
                    <h2> name: {door.name}</h2>
                    <h3>id: {door.id}</h3>
                    --------------------------------------------------------------
                </div>

            )
        })
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dock Doors</h1>
                </header>

                <form className="App-intro">
                    <input id="textBox" type="text"  required />
                    <input type="submit" value="Submit" onClick={this.buttonClick}/>
                </form>
                <div style={{textAlign: "left", whiteSpace: "pre-wrap"}}>{this.state.data}</div>

                <div>
                    {doorList}

                </div>
            </div>
        );
    }
}

export default App;
