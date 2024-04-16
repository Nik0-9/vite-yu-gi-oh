<template>
    <main class="container">
        <select class="form-select w-25 my-3" @change="$emit('archetypeSearch')" v-model="store.statusFilter">
            <option value="">All</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList"> {{ archetype.archetype_name }}</option>
        </select>
        <CardsList />
    </main >
</template>

<script>
import {store} from '../../store.js';
import CardsList from './CardsList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CardsList
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