<template>
   <div class="card">
        <img :src="image" class="card-img-top" :alt="title" ref="image">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">
                <span>{{ status }}</span> 
                <br>
                <span>{{ text }}</span>
                <br>
                <span>{{ subtext }}</span>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
    }
</script>

<style lang="scss" scoped>

</style>