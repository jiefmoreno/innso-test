import Vue from 'vue'
import Vuex from 'vuex';
import dataMock from '../MOCK_DATA.json';

Vue.use(Vuex)
const mockFetchApi = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(dataMock)));
    }, 300);
});

const store = new Vuex.Store({
    state: {
        fetching: false,
        list: [],
        error: {}
    },
    mutations: {
        fetching(state) {
            state.fetching = true
        },
        fetchSuccess(state, { response }) {
            state.fetching = false
            state.list = [...response]
        },
        fetchError(state, { error }) {
            state.fetching = false
            state.list = []
            state.error = error
        }

    },
    actions: {
        async fetchList(context) {
            context.commit('fetching')
            try {
                const response = await mockFetchApi();
                context.commit('fetchSuccess', { response })
            } catch (error) {
                context.commit('fetchError', { error })
            }
        }
    }
})

export default store;