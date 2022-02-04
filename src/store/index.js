import Vue from 'vue'
import Vuex from 'vuex'
import ProductData from './../Json/products.json';
import CardData from './../Json/card.json';

Vue.use(Vuex)

const setProductToStore = () => {
  store.commit('SET_PRODUCTS', ProductData);
}
const addProductToCard = () => {
  store.commit('GET_CARDPRODUCTS', CardData);
}

const store = new Vuex.Store({
  state: {
    products: [],
    cardProdcuts: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => { 
      state.products = products;
    },
    GET_CARDPRODUCTS: (state, cardProdcuts) => { 
      state.cardProdcuts = cardProdcuts;
    },
    UPDATE_CARDPRODUCTS(state, payload) {
      state.cardProdcuts = payload;
      console.log(state.cardProdcuts);
    }
  },
  actions: {

    addItemToCard(context, payload) {
      const cardProdcut = context.state.cardProdcuts;
      cardProdcut.push(payload)
      context.commit('UPDATE_CARDPRODUCTS', cardProdcut)
    },
    removeItemToCard(context, payload) {
      const cardProdcut = context.state.cardProdcuts;
      cardProdcut.splice(payload,1)
      context.commit('UPDATE_CARDPRODUCTS', cardProdcut)
    },
    increaseItemToCard(context, payload){
      const cardProdcut = context.state.cardProdcuts;
      cardProdcut[payload.index].quantity = payload.quantity;
      cardProdcut[payload.index].total = payload.total;
      context.commit('UPDATE_CARDPRODUCTS', cardProdcut)
    }
    
  },
  modules: {
  }
})

setProductToStore();
addProductToCard();

export default store;






