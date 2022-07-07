<template>
  <div id="app">
    <h2>{{titulo}}</h2>
    <div class="container">
      <div class="form">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" class="form-control" v-model="registro.nombre">
        </div>
        <div class="form-group">
          <label>Colegio</label>
          <input type="text" class="form-control" v-model="registro.colegio">
        </div>
        <br>
        <button class="btn btn-primary" @click="agregarEstudiante">Guardar</button>
      </div>
      <hr>
      <div class="row">
        <div class="col-5" v-for="registro in registros">
          <div class="card">
            <div class="form-group">
              <h2>{{registro.nombre}}</h2>
              <hr>
              <p>{{registro.colegio}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h1>slasasalas hjbjhb</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
      titulo: 'Welcome to Your gowplay',
      registro: {
        nombre: '',
        colegio: ''
      },
      registros: [
        // {
        //   nombre: 'Juan Castillo',
        //   colegio: 'Juan xxv'
        // }
      ]
    }
  },
  methods: {
    agregarEstudiante: function(){
      const {nombre, colegio} = this.registro;
      this.registros.push({
        nombre, colegio
      })
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
