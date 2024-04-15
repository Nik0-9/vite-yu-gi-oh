<template>
        <NumCards />
        <div class="row">
            <div class="col-12 col-md-6 col-lg-2" v-for="(card ,index) in store.cards">
                <CardComponent :id="card.id" :title="card.name" :image="card[index].card_images.image_url" />
            </div>
        </div>
</template>

<script>
import {store} from '../../store.js';
import NumCards from './NumCards.vue';
import CardComponent from './CardComponent.vue';

    export default {
        name: 'CardsList',
        components:{
            NumCards,
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>