import React from 'react';
import ReactDOM from "react-dom";
import Todo from './Todo.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <AppContainer/>
            </div>
        );
    }

}
class Main extends React.Component {


    render() {
        let mainClassName = "page col-xs-10";
        let animateclassName = this.props.animate ?  mainClassName + "animate rotateOutUpLeft ":mainClassName;
        return (
            <div className="page col-xs-10 animate  rotateOutUpLeft">
                <Todo/>
            </div>
        );
    }
}

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uiOptions: {
                isNext: false
            },
            notes:[]
        }
    }

    nextMain() {
        this.setState({
            uiOptions: {
                isNext: true
            }
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Main animate={this.state.uiOptions.isNext}/>
                </div>
                <div className="row col-xs-2 pull-right">
                    <span onClick={this.nextMain.bind(this)}>Next <i
                        className="glyphicon glyphicon-arrow-right"></i></span>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))