
export const PageNumber = {};

PageNumber.PageActionTypes = {
    INCREMENT:"increment",
    DECREMENT:"decrement",
    UPDATE:"update"
};

PageNumber.Reducers={};

PageNumber.Reducers.pageActionReducer = (state={pageNumber:0},action)=>{
    switch (action.type){
        case PageNumber.PageActionTypes.INCREMENT:
            console.log("About to increment %s",state.pageNumber);
            let incrementedNumber = state.pageNumber +1;
            return Object.assign({},state,{pageNumber:incrementedNumber});
        case PageNumber.PageActionTypes.DECREMENT:
            let  decrementedNumber=state.pageNumber-1;
            return Object.assign({},state,{pageNumber:decrementedNumber});
        case PageNumber.PageActionTypes.UPDATE:
            console.log("Updating action given page number is %s",action.pageNumber);
            return Object.assign({},state,{pageNumber:action.pageNumber});
        default:
            return state;
    }
}

PageNumber.Actions ={};

PageNumber.Actions.incrementAction = ()=>{
    return {type:PageNumber.PageActionTypes.INCREMENT}
}
PageNumber.Actions.decrementAction = ()=>{
    return {type:PageNumber.PageActionTypes.DECREMENT};
}

PageNumber.Actions.updateAction =(pageNumber)=>{
    return {type:PageNumber.PageActionTypes.UPDATE,
        pageNumber:pageNumber
    }
}
