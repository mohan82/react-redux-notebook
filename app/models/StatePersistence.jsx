let STATE_KEY = "noteBookApplicationState";

export default class StatePersistence {
    persistState(state) {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));

    }
    getState () {
        let state = localStorage.getItem(STATE_KEY) || '{}';
        console.log(state);
        return JSON.parse(state);
    }
};

