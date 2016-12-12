import * as types from '../mutation-types';

// initial state
const state = {
    patients: [],
};

const getters = {
    getAllPatients: (state) => state.patients,
};

const actions = {
    add( { commit }, patient) {
        commit(types.ADD_PATIENT, { patient });
    },
    removeAll({ commit }) {
        commit(types.REMOVE_ALL_PATIENTS);
    },
    persistAll({ commit }) {
        commit(types.PERSIST_ALL_PATIENTS);
    },
    loadPatients({ commit }) {
        commit(types.LOAD_PATIENTS);
    },
};

const mutations = {
    [types.ADD_PATIENT](state, { patient }) {
        state.patients.push(patient);
    },
    [types.REMOVE_ALL_PATIENTS](state) {
        state.patients = [];
        if (window.localStorage) {
            window.localStorage.removeItem('patients');
        }
    },
    [types.PERSIST_ALL_PATIENTS](state) {
        if (window.localStorage) {
            window.localStorage.setItem(
                'patients',
                JSON.stringify(state.patients)
            );
        }
    },
    [types.LOAD_PATIENTS](state) {
        if (window.localStorage) {
            state.patients = JSON.parse(
                window.localStorage.getItem('patients')
            );
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
