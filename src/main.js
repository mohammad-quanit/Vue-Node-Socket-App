import Vue from 'vue';
import App from './App.vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false

export const SocketInstance = socketio('http://localhost:4001');
// Vue.use(VueSocketIO, SocketInstance);

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance,
  // options: { path: "/my-app/" } //Optional options
}));

new Vue({
  render: h => h(App),
}).$mount('#app')
