<template>
        <h4>Found {{ store.numCards }} cards</h4>
</template>

<script>
import {store} from '../../store.js';
    export default {
        name: 'NumCards',
        data(){
            return{
                store

            }
        }
    }
</script>

<style lang="scss" scoped>
    h4{
        background-color: rgb(36, 36, 36);
        color: white;
        padding: 10px;
    }
</style>