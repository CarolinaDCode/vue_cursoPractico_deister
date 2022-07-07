import Vue from 'vue'
import App from './App.vue'
import ButtonEnviar  from './components/ButtonEnviar.vue'
import DatosUsuario from './components/DatosUsuario.vue'

// importando un componente de forma Global, para 
//no importarlo en cada componente, sino simplemente usarlo
//Vue.component('enviar', button); 

//Template en linea
Vue.component('enviar', ButtonEnviar);
Vue.component('App-datausuario', DatosUsuario);

new Vue({
  el: '#app',
  render: h => h(App)
})
