
const state={
  pageLoading:false
};
const getters={
  getLoading(state){ 
    return state.pageLoading;
  }
};
const mutations = {
     showLoading(state){
        state.changeLoading = true
     },
     hideLoading(state){
        state.changeLoading = false
     },
 };
const actions = {
    showPageLoad(context){
      console.log('9')
        context.commit('showLoading');
    },
    hidePageLoad(context){
      console.log('8')
      context.commit('hideLoading');
    }
};
export default {
     namespaced:true,
     getters,
     mutations,
     actions
}