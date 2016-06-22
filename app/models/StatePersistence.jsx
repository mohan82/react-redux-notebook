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
        if(typeof localStorage==undefined
            ||localStorage.getItem==undefined
            ||localStorage.setItem==undefined){
            return FALLBACK_STORE;
        }else {
            return localStorage;
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

