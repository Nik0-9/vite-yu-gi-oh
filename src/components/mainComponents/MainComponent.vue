<template>
    <main class="container p-4 ">
        <CardsList />
    </main >
</template>

<script>
import CardsList from './CardsList.vue'
    export default {
        name: 'MainComponent',
        components:{
            CardsList
        }
    }
</script>

<style lang="scss" scoped>
    
</style>