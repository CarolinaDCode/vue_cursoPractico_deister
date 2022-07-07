<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <App-saludar/>
    <hr>

    <center>
      <App-datausuario
        nombre="Juan Perez"
        ciudad="Bogota"
        correo="exple@gmail"
        :edad="23"
      ></App-datausuario>
      <hr>
      <App-datausuario
        nombre="Juan Perez 0989"
        
        correo="exple@gmail"
        :edad="23"
      ></App-datausuario>
      <hr>
      <App-datausuario
        nombre="8979"
        ciudad="Bogota"
        correo="exple@gmail"
        :edad="23"
      ></App-datausuario>
    </center>

    <hr>
    <enviar inline-template>
      <h1>
        template-lineal 
        <br>
        <button>Enviar</button>
      </h1>
    </enviar>

  </div>
</template>

<script>
import MensajeSaludar from './components/MensajeSaludar'
export default {
  name: 'app',
  components:{
    'App-saludar':MensajeSaludar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
