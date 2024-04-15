<template>
    <main class="container">
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
    main{
        background-color: white;
    }
</style>