
const state = {
  pageLoading:false
};
const getters={
  getLoading(state){ 
    return state.pageLoading;
  }
};
const mutations = {
     showLoading(state){
        state.pageLoading = true
     },
     hideLoading(state){
        state.pageLoading = false
     },
 };
const actions = {
    showPageLoad(context){
        context.commit('showLoading');
    },
    hidePageLoad(context){
      context.commit('hideLoading');
    }
};
export default {
     namespaced:true,
     state,
     getters,
     mutations,
     actions
}