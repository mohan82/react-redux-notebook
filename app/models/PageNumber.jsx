
export const PageNumber = {};

PageNumber.PageActionTypes = {
    INCREMENT:"increment",
    DECREMENT:"decrement"
};

PageNumber.Reducers={};

PageNumber.Reducers.pageActionReducer = (state=0,action)=>{
    switch (action.type){
        case PageNumber.PageActionTypes.INCREMENT:
            console.log("About to increment %s",state);
            return state+1;
        case PageNumber.PageActionTypes.DECREMENT:
            return state -1;
        default:
            return state;
    }
}

PageNumber.Actions ={};

PageNumber.Actions.pageIncrementAction = ()=>{
    return {type:PageNumber.PageActionTypes.INCREMENT}
}
PageNumber.Actions.pageDecrementAction = ()=>{
    return {type:PageNumber.PageActionTypes.DECREMENT};
}

