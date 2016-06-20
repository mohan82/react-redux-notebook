import React from 'react';
import NotePage from './NotePage.jsx';

export default class NotebookPanel extends React.Component {

    constructor(props,context) {
        console.log("Initialising Notebook Panel...")
        super(props,context);
        this.notes=this.props.notes ||[];
        console.log('note book panel initialising '+this.notes.length);
    }
    setDefault(){
        this.notes[this.props.pageNumber] = this.notes[this.props.pageNumber] ||[];
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
                    <label className="text-info">Page {this.props.pageNumber+1}</label>
                </div>
                <div className="row">
                    <NotePage updatePage={this.updatePage.bind(this)}/>
                </div>
                {(()=>{
                    if(this.props.pageNumber>0){
                        return( <div className="row col-xs-2 pull-left">
                             <span onClick={this.previousPage.bind(this)}> <i
                                 className="glyphicon glyphicon-arrow-left"></i> Previous</span>
                        </div>)
                    }
                })()
                }
                <div className="row col-xs-2 pull-right">
                    <span onClick={this.nextPage.bind(this)}>Next <i
                        className="glyphicon glyphicon-arrow-right"></i></span>
                </div>
                <div className="row text-center">
                     <label className="text-info">Page {this.props.pageNumber+1}</label>
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