import React from 'react';
import isEmpty from 'lodash/isEmpty'
import {connect} from 'react-redux';
export default class NoteContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange() {

        let lines = []
        let element = this.refs.notes;
        $(element).find("li").map((index, element)=> {
            let unescapedString = $(element).text();
            var escapedString = $("<div>").text(unescapedString).html();
            lines.push(escapedString.trim());
        });
        this.props.updatePage(lines)

    }

    getNotes() {
        return this.props.notes[this.props.pageNumber] || [];
    }

    componentDidMount(){
        this.appendNotes();
    }
    componentDidUpdate(){
        this.appendNotes();
    }
    appendNotes() {
        console.log("Appending notes")
        if (!isEmpty(this.refs.notes)) {
            console.log("Jquery Appending notes")
            let ulElement = $(this.refs.notes);
            $(this.refs.notes).empty();
            let lines = this.getNotes();
            if(isEmpty(lines)){
                ulElement.append('<li>&nbsp;</li>');

            }else {
                lines.map((line)=> {
                    console.log(line);
                    if(isEmpty(line)){
                        ulElement.append('<li>&nbsp;</li>');
                    }else {
                        ulElement.append('<li>' + line + '</li>')
                    }
                });
            }
        }

    }

    render() {
        return (
            <ul id="notes" contentEditable="true" ref="notes" onInput={this.handleChange.bind(this)}>

            </ul>);
    }
}


const mapStateToProps = (state) => {
    return {
        pageNumber: state.pageActionReducer.pageNumber,
        notes: state.noteActionReducer.notes
    }
}

export default connect(mapStateToProps)(NoteContainer)
