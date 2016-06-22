import  React from 'react';

export  default class NavigationFooter extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let inactiveClassName= this.props.pageNumber<= 0?'inactive':'active';
        return(<div className="nav-footer">
             <div className={inactiveClassName}>
                        <button onClick={this.props.previousPage}>
                            <i className="glyphicon glyphicon-arrow-left"/>Previous
                        </button>
             </div>
            <div>
                <label className="page-text">Page {this.props.pageNumber + 1}</label>
            </div>
            <div>
                <button onClick={this.props.nextPage}>
                    Next <i className="glyphicon glyphicon-arrow-right"/>
                </button>
            </div>
        </div>)
    }
}