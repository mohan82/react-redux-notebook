import React from 'react';

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lines:[]
        }
    }
    handleChange(){

     let lines =[]
        console.log(this.refs.notes);
        $(this.refs.notes).find("div").map((index,element)=>{
           lines.push($(element).text());
        });
        console.log(lines);
        return lines;
    }
    render() {
        return (
            <div id="notes" contentEditable="true" ref="notes" onInput ={this.handleChange.bind(this)}>
            </div>
        );
    }

}
export  default Note;