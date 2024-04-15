<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/mainComponents/MainComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      this.store.loading = true;

      axios.get(this.store.apiUrl).then((res) => {
        this.store.cards = res.data.data;
        this.store.numCards = res.data.meta.current_rows;
        console.log(res.data.data);
        console.log(this.store.cards);
      }).finally(()=>{
        // always executed
        this.store.loading = false;
      });
    }
  },
  created() {
    this.getCard();
  }
}
</script>

<style lang="scss" scoped></style>