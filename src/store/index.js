import Vue from 'vue';
import Vuex from 'vuex';
import pageState from './modules/pageState';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        pageState
    }
});
 
export default store 
