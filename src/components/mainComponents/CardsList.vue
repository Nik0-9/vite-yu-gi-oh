<template>
        <NumCards />
        <div class="row">
            <div class="col-12 col-md-6 col-lg-2" v-for="card in store.cards" :key="cards.id">
                <CardComponent :id="character.id" :title="character.name" :image="character.image" :status="character.status" :text="character.species" :subtext="character.gender"/>
            </div>
        </div>
</template>

<script>

import NumCards from './NumCards.vue';
import CardComponent from './CardComponent.vue';

    export default {
        name: 'CardsList',
        components:{
            NumCards,
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>