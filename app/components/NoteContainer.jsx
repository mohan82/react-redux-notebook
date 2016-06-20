import React from 'react';
import isEmpty from 'lodash/isEmpty'
import {connect} from 'react-redux';
export default class NoteContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange() {
        let lines = []
        console.log(this.refs.notes);
        $(this.refs.notes).find("li").map((index, element)=> {
            lines.push($(element).text().trim());
        });
        console.log("handling change ");
        console.log(lines);
        this.props.updatePage(lines)

    }

    getNotes() {
        console.log(this.props.notes);
        return this.props.notes[this.props.pageNumber] || [];
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
                    ulElement.append('<li>' + line + '</li>')
                });
            }
        }

    }

    render() {
        this.appendNotes();
        let lines = this.getNotes();
        return (
            <ul id="notes" contentEditable="true" ref="notes" onInput={this.handleChange.bind(this)}>

                {(()=> {
                    if (isEmpty(lines)) {
                        return (<li>&nbsp;</li>
                        )
                    }else {
                        return (lines.map((line)=> {
                            return(<li>{line}</li>)
                        }))
                    }

                })()
                }
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
