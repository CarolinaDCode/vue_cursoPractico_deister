<template>
    <div>
        <h1>{{nombre}}</h1>
        <h2>{{ciudad}}</h2>
        <h2>{{correo}}</h2>
        <h2>{{edad}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        nombre:[Number, String],
        ciudad:{
            type:String,
            default:"Data not null"
        },
        correo:String,
        edad:Number
    }
}
</script>
<style scoped>

</style>