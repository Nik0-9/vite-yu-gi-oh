<template>
   <div class="card">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">
                {{ archetype }}
            </p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:[
            'id',
            'image',
            'title',
            'archetype'
        ]
    }
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.card{
    min-height: 500px;
}
.card-body{
    background-color: $bg-color;
    .card-title{
        color: white;
        font-weight: 500;
    }
}

</style>