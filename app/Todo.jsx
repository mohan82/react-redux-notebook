import React from 'react';

class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lines:[]
        }
    }
    handleChange(){

     let lines =[]
        $(this.refs.notes).find("li").map((index,element)=>{
           lines.push($(element).text());
        });
        return lines;
    }
    render() {
        return (
            <ul contentEditable="true" ref="notes" onInput ={this.handleChange.bind(this)}>
                <li>hello</li>
            </ul> );
    }

}
export  default Todo;