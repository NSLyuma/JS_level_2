import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemsInCart: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = payload.newData;
            state.itemsOnPage = Object.keys(payload.newData);
        },
        setCart(state, id) {
            state.itemsInCart.push(id);
        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsInCart;
            return keys.reduce((res, cur) => res + state.data[cur].price, 0);
        },
        getItemsInCart: state => state.itemsInCart,
    },
    actions: {
        requestData({ commit }, page) {
            fetch(`/database/catalog${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit("setData", { newData: res });
                });
        },
        addToCart({ commit }, id) {
            commit("setCart", id.target.id);
        }
    },
});