import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


const childB = {
    namespaced: true,
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
                let step = 6;
                commit('increment', step);
                parent.mutations.increaseCumulScore(parent.state, step);
            }, delay);
        }
    },
};

const childA = {
    namespaced: true,
    state:{
        score: 10,
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
                let step = 3;
                commit('increment', step);
                parent.mutations.increaseCumulScore(parent.state, step);
            }, delay);
        }
    },
};

const parent = {
    namespaced: true,
    state: {
        cumulScore: childA.state.score + childB.state.score,
    },
    getters:{
        cumulScore(state) {
            return state.cumulScore
        }
    },
    mutations: {
        increaseCumulScore(state, score) {
            state.cumulScore += score;
        }
    }
};

export default new Vuex.Store({
    modules: {
        scoreBoard: childA,
        resultBoard: childB,
        cumulBoard: parent
    },
})