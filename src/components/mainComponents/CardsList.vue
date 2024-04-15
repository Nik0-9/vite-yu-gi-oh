<template>
    <div class="p-4">
        <NumCards />
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col" v-for="card in store.cards">
                <CardComponent :image="card.card_images[0].image_url" :id="card.id" :title="card.name"
                    :archetype="card.archetype" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../store.js';
import NumCards from './NumCards.vue';
import CardComponent from './CardComponent.vue';

export default {
    name: 'CardsList',
    components: {
        NumCards,
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    background-color: white;
}
</style>