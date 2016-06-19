import  React from 'react';
import  Note from './Note.jsx';
export  default class NotePage extends React.Component {
    render() {
        let mainClassName = "page col-xs-10";
        let animateclassName = this.props.animate ?  mainClassName + "animate rotateOutUpLeft ":mainClassName;
        return (
            <div className={animateclassName}>
                <Note/>
            </div>
        );
    }
}

