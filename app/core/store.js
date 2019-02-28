import Vue from 'vue';
import Vuex from 'vuex';
import Turn from '../core/turn'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        chapter: 2,
        turn: new Turn()
    },
});