<template>
    <div id="msj">
        <ul>
            <enviar keyv-for="data in diasSemana">
                {{data.text}}
            </enviar>
        </ul>
        <!-- <h1>{{nombre}}</h1>
        <hr>
        <input type="text" v-model="nombre"> -->

    </div>
</template>
<script>
export default {
    name: "msj",
    data(){
        return {
            diasSemana: [
                { id:1, text:'lunes'},
                { id:2, text:'martes'},
                { id:3, text:'miercoles'},
                { id:4, text:'jueves'},
                { id:5, text:'viernes'},
            ]
            //nombre: 'Texto'
        }
    }
}
</script>
<style scoped>
</style>


    <!-- <h1>
        Hola mundo desde saludar
        <hr>
        <enviar inline-template>
            <h2>
                Template lineal - saludar.vue 
                <button>Guardar</button>
            </h2>
        </enviar>
    </h1> -->