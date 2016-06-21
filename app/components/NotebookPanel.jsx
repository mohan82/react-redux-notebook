import React from 'react';
import NotePage from './NotePage.jsx';

export default class NotebookPanel extends React.Component {

    constructor(props,context) {
        console.log("Initialising Notebook Panel...")
        super(props,context);
        this.notes=this.props.notes ||[];
        console.log('note book panel initialising '+this.notes.length);
        this.state = {
            uiOptions:{
                animate:false
            }
        }
    }
    setDefault(){
        this.notes[this.props.pageNumber] = this.notes[this.props.pageNumber] ||[];
    }
    togglieAnimation(){
        this.setState({
            uiOptions:{
                animate:(!this.state.animate)
            }
        });
    }
    nextPage() {
         this.setDefault();
        console.log("next page:" +this.notes[this.props.pageNumber].length);
        this.props.addNotes(this.props.pageNumber,this.notes[this.props.pageNumber]);
        this.props.increment();
        let nextPage = "/note/"+(this.props.pageNumber+1);
        this.context.router.push(nextPage);
    }
    previousPage(){

        this.setDefault();
        console.log(this.notes[this.props.pageNumber].length);
        this.props.addNotes(this.props.pageNumber,this.notes[this.props.pageNumber]);
        this.props.decrement();
        let previousPage = "/note/"+(this.props.pageNumber-1);
        this.context.router.push(previousPage);

    }
    updatePage(lines){
        this.setDefault();
        console.log("Updating page..."+this.notes[this.props.pageNumber].length);
        this.notes[this.props.pageNumber]=lines;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <label className="page-text">Page {this.props.pageNumber+1}</label>
                </div>
                <div className="row">
                    <NotePage updatePage={this.updatePage.bind(this)}/>
                </div>
                <div className="nav-footer">
                {(()=>{
                    if(this.props.pageNumber>0){
                        return( <div>
                            <button onClick={this.previousPage.bind(this)}>
                                <i className="glyphicon glyphicon-arrow-left"/>Previous
                            </button>
                        </div>)
                    }
                })()
                }
                <div>
                     <label className="page-text">Page {this.props.pageNumber+1}</label>
                 </div>
                <div>
                    <button onClick={this.nextPage.bind(this)}>
                        Next <i className="glyphicon glyphicon-arrow-right"/>
                    </button>
                </div>
               </div>
            </div>
        )
    }
}

NotebookPanel.contextTypes= {
    router: function () {
       return React.PropTypes.func.isRequired
    }
}