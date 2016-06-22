import React from 'react';
import NotePage from './NotePage.jsx';
import NavigationFooter from './NavigationFooter.jsx';



export default class NotebookPanel extends React.Component {

    constructor(props, context) {
        console.log("Initialising Notebook Panel...")
        super(props, context);
        this.notes = this.props.notes || [];
        console.log('note book panel initialising ' + this.notes.length);
        this.state =this.initState();
    }

    initState(){
       return{navigationType:null,animate:false};

    }
    animate(navigationType){
        let animatedClassName = this.getAnimationClassName(navigationType)
        $(this.refs.notePage).addClass(animatedClassName).
        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
             () =>{
                $(this.refs.notePage).removeClass(animatedClassName);
            });
    }


    setDefault() {
        this.notes[this.props.pageNumber] = this.notes[this.props.pageNumber] || [];
    }

    nextPage() {
        this.setDefault();
        console.log("next page:" + this.notes[this.props.pageNumber].length);
        this.props.addNotes(this.props.pageNumber, this.notes[this.props.pageNumber]);
        this.props.increment();
        let nextPage = "/note/" + (this.props.pageNumber + 1);
        this.animate('next');
        this.context.router.push(nextPage);
    }

    previousPage() {
        this.setDefault();
        this.props.addNotes(this.props.pageNumber, this.notes[this.props.pageNumber]);
        this.props.decrement();
        this.animate('prev');
        let previousPage = "/note/" + (this.props.pageNumber - 1);
        this.context.router.push(previousPage);

    }

    updatePage(lines) {
        this.setDefault();
        console.log("Updating page..." + this.notes[this.props.pageNumber].length);
        this.notes[this.props.pageNumber] = lines;
    }

    getAnimationClassName(navigationType) {
       if(navigationType==='prev'){
          return ' animate-page animate rotateOutDownLeft';

        } else {
            return '  animate-page animate rotateOutUpLeft';
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <label className="page-text">Page {this.props.pageNumber + 1}</label>
                </div>
                <div className="row">
                    <div ref="notePage" className="page col-xs-10">
                        <NotePage
                            updatePage={this.updatePage.bind(this)}/>
                    </div>
                </div>
                <div>
                    <NavigationFooter nextPage={this.nextPage.bind(this)}
                                      previousPage={this.previousPage.bind(this)}
                                      pageNumber={this.props.pageNumber}/>
                </div>
            </div>
        )
    }
}

NotebookPanel.contextTypes = {
    router: function () {
        return React.PropTypes.func.isRequired
    }
}