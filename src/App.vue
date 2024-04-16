<template>
  <HeaderComponent />
  <MainComponent @archetypeSearch="setParams" />

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
    setParams() {
      console.log(this.store.qString);

      console.log(this.store.statusFilter);
      if (this.store.statusFilter) {
        this.store.qString.params.archetype = this.store.statusFilter;
      } else {
        delete this.store.qString.params.archetype
      }
      this.getCard()
    },
    
    getCard() {
      this.store.loading = true;

      axios.get(this.store.apiUrl + this.store.cardInfo, this.store.qString).then((res) => {
        this.store.cards = res.data.data;
        this.store.numCardsPage = res.data.meta.current_rows;
        this.store.totNumCards = res.data.meta.total_rows;
        // console.log(res.data.data);
        // console.log(this.store.cards);
      })
        .finally(() => {
          // always executed
          this.store.loading = false;
        });
    },

    getAcrhetype() {
      this.store.loading = true;

      axios.get(this.store.apiUrl + this.store.archetype).then((res) => {
        this.store.archetypeList = res.data.slice(0, 20);
        // console.log(this.store.archetypeList);
      })
        .finally(() => {
          // always executed
          this.store.loading = false;
        });
    }
  },
  created() {
    this.getCard();
    this.getAcrhetype();
  }
}
</script>

<style lang="scss" scoped></style>