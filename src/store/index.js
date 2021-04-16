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
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        },
        setCart(state, id) {
            if (!state.itemsInCart.includes(id)) {
                state.itemsInCart.push(id);
            } else {
                state.data[id].quantity++;
            }
        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsInCart;
            return keys.reduce((res, cur) => res + state.data[cur].price * state.data[cur].quantity, 0);
        },
        getItemsInCart: state => state.itemsInCart,
    },
    actions: {
        requestData({ commit }, page) {
            fetch(`/itemslist/${page}`, {
                method: "GET",
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit("setData", { newData: res });
                });
        },
        addToCart({ commit }, id) {
            commit("setCart", id.target.id);
        },
        addItem({ }, data) {
            fetch("/itemslist", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                });
        },
    },
});