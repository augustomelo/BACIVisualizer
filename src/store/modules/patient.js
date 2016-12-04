import * as types from '../mutation-types';

// initial state
const state = {
    patients: [],
};


const getters = {
    getPatients: (state) => added,

};

const actions = {
    add( { commit }, patient) {
        commit(types.ADD_PATIENT, { patient });
    },
    removeAll( { commit } ) {
        commit(types.REMOVE_ALL_PATIENTS);
    },
};

const mutations = {
    [types.ADD_PATIENT](state, { patient }) {
        patients.push(patient);
    },
    [types.REMOVE_ALL_PATIENTS](state) {
        state.patients = [];
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};