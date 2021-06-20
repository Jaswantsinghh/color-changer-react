import React from 'react';

import ReactDOM from 'react-dom';

class Main extends React.Component {
    randomColor() {
        let randColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randColor;
        document.querySelector(".input-area").value = "#" + randColor;
    }
    render() {
        return <button onClick={this.randomColor} className="btn">Click me</button>
    }
};
class Heading extends React.Component {
    render() {
        return <h1>Color Changer</h1>;
    }
};
class InputColor extends React.Component {
    render() {
        return <input className="input-area" placeholder="Color Code"></input>
    }
};
class SubmitBtn extends React.Component {
    render() {
        return <button className="btn-sbmt" >Submit</button>;
    }
}
class Body extends React.Component {
    render() {
        return (<div>
            <Heading />
            <Main />
            <InputColor />
            <SubmitBtn />

        </div>
        )
    }
}

const el = document.body;
ReactDOM.render(<Body />, el);