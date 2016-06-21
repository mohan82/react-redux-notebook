let STATE_KEY = "noteBookApplicationState";
let FALLBACK_STORE = {
    getItem(key){
        return undefined;
    },
    setItem(key,state){

    }
};
export default class StatePersistence {

    _getLocalStorage(){
        if(localStorage){
            return localStorage;
        }else {
            return FALLBACK_STORE;
        }
    }
    persistState(state) {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));

    }
    getState () {
        let state = localStorage.getItem(STATE_KEY) || '{}';
        console.log(state);
        return JSON.parse(state);
    }
};

