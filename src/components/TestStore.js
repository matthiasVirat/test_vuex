import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


const childB = {
    state:{
        result: 3,
    },
    getters:{
        result(state) {
            return state.result;
        }
    },
    mutations:{
        increase(state, step) {
            state.result += step;
        }
    },
    actions:{
        increaseResult: ({commit}, delay) => {
            setTimeout(() => {
                commit('increase', 6);
            }, delay);
        }
    },
};

const childA = {
    state:{
        score: 0,
    },
    getters:{
        score(state) {
            return state.score;
        }
    },
    mutations:{
        increment(state, step) {
            state.score += step;
        }
    },
    actions:{
        incrementScore: ({commit}, delay) => {
            setTimeout(() => {
                commit('increment', 3);
            }, delay);
        }
    },
};

export default new Vuex.Store({
    modules: {
        scoreBoard: childA,
        resulteBoard: childB
    }
})