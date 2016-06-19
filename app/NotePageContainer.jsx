import React from 'react';
import NotePage from './NotePage.jsx';
import { connect } from 'react-redux'
import  {PageNumber} from './models/PageNumber.jsx'

class NotePageWrapper extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.count);
        this.state = {
            uiOptions: {
                isNext: false
            },
            notes:[]
        }
    }

    nextPage() {
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
                    <div className="col-xs-2 pull-left">
                        <h4>{this.props.count}</h4>
                    </div>
                    <div className ="col-xs-2 pull-right">
                        <input type="button" className="btn btn-danger" value="Increment"
                               onClick={this.props.increment.bind(this)}/>
                    </div>
                    <div className ="col-xs-2 pull-right">
                        <input type="button" className="btn btn-danger" value="Decrement"
                               onClick={this.props.decrement.bind(this)}/>
                    </div>
                </div>
                <div className="row">
                    <NotePage animate={this.state.uiOptions.isNext}/>
                </div>
                <div className="row col-xs-2 pull-right">
                    <span onClick={this.nextPage.bind(this)}>Next <i
                        className="glyphicon glyphicon-arrow-right"></i></span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.pageActionReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            console.log('dispatching increment action');
            dispatch(PageNumber.Actions.pageIncrementAction())
        },
        decrement:()=>{
            dispatch(PageNumber.Actions.pageDecrementAction())
        }
    }
}

const NotePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotePageWrapper)

export  default NotePageContainer