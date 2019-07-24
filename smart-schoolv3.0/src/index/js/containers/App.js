import 'core-js'
import React from 'react';
import logo from '../../images/logo.svg';
import '../../css/App.css';
import {Button} from '../../../common/index'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

   ButtonFunc = (event) => {
        console.log(event.target)
    }

    Button_1 = {
        style:{color: '#fff'},
        details:'按钮1',
        type:'primary',
        func:this.ButtonFunc
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <h4> this is desktop click <a href="/html/login">this</a> to login page</h4>
                    <Button {...this.Button_1}/>
                    <Button size="normal"  details={'按钮2'} func={this.ButtonFunc}/>
                    <Button size="small"  type="normal" details={'按钮3'} func={this.ButtonFunc}/>
                </header>
                <div>

                </div>
            </div>
        );
    }
}

export default App;
