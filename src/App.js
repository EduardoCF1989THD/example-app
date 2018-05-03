import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {data: null}
    }

    buttonClick(e){
        e.preventDefault();
        console.log("clicked", e.target);
        // fetch(`${domainForDoors}/readAlbums`).then(console.log);
        fetch(`http://localhost:8080/readAlbums`)
            .then(response => {
                console.log('GrandChild did mount.');
                alert(response.text());
            });
    }

    componentDidMount() {
        //This function is called correctly
       // alert('GrandChild did mount.');

        // fetch('http://localhost:8080/getAllDoors')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         alert(responseJson);
        //     });


        fetch(`http://localhost:8080/getAllDoors`)
            .then(response => response.json())
            .then(r => this.setState({data: JSON.stringify(r, null, 2)}));

        // fetch(`http://localhost:8080/getAllDoors`)
        //     .then(body => {
        //         console.log('GrandChild did mount.');
        //         alert("sfrgddgf");
        //     });
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">This is my message</h1>
                </header>

                <form className="App-intro">
                    <input type="text" />
                    <input type="submit" value="Eduardo" onClick={this.buttonClick}/>
                </form>
                <div style={{textAlign: "left", whiteSpace: "pre-wrap"}}>{this.state.data}</div>
            </div>
        );
    }
}

export default App;



// handleChange = (event) => {
//     this.setState({request: event.target.value})
// }
//
// handleSubmit = (event) => {
//     event.preventDefault();
//     var request = this.state.request.trim();
//     if(!request){
//         return;
//     }
//     // fetch('/echo?request=${request}')
//     //     .then(response => {
//     //         return response.text();
//     //     })
//     //     .then(body => {
//     //         alert(body);
//     //     });
//     fetch('')
//         .then(response => {
//             return response.text();
//         })
//         .then(body => {
//             alert(body);
//         });
//
// }