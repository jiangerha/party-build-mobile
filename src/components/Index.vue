<template>
  <div class="hello">
    <loading v-model="pageLoading"></loading>
    <x-button type="primary" @click.native='showLoad'>加载</x-button>
    <x-button type="warn"@click.native="hideLoad">不加载</x-button>
    <!-- <button @click='greet'>77</button> -->
    <router-view/>
  </div>
</template>

<script>
import { Loading, XButton } from 'vux';
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    showLoad(){
      console.log(this.$store,1)
      this.$store.dispatch('pageState/showPageLoad')
    },
    hideLoad(){
      console.log(2)
      this.$store.dispatch('pageState/hidePageLoad')
    },
  },
  computed:{
    ...mapState({ 
         pageLoading: state => {
           console.log(state.pageState.pageLoading,'state.pageState.pageLoading')
           return state.pageState.pageLoading
         }
      }),
  },
  components: {
    Loading,
    XButton
  },
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>