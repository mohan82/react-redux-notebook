import React from 'react';
import NoteBookPanelContainer from './NotebookPanelContainer.jsx';
import { connect } from 'react-redux'
import  {PageNumber} from '../models/PageNumber.jsx'


class NoteBookApplication extends React.Component {
    constructor(props){
        super(props)
        console.log("Initialising....")
        let pageNumber = parseInt(this.props.params.pageNumber) ||0;
        this.props.initPageNumber(pageNumber);
    }
    componentDidMount(){

    }
    render() {

        return (
            <NoteBookPanelContainer/>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        count: state.pageActionReducer.pageNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPageNumber: (pageNumber) => {
            console.log('Initialising Page Number %s',pageNumber);
            dispatch(PageNumber.Actions.updateAction(pageNumber));
        }
    }
}

export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteBookApplication)


