import { createStore } from 'vuex'

export default createStore({
  state: {
    delMensajeIndex: null,
    mensajes: [],
    mensaje:{
      texto: null,
      tipo: null
    }
  },
  getters: {
    getMensajes(state){
      return state.mensajes;
    }
  },
  mutations: {
    addMensaje(state){
      state.mensajes.push(state.mensaje);
    },
    delMensaje(state){
      state.mensajes = state.mensajes.splice(state.delMensajeIndex,1);
    }
    
  },
  actions: {
    addMensajeAction(context){
      context.commit('addMensaje');
    },
    delMensajeAction(context){
      context.commit('delMensaje');
    }
  },
  modules: {
  }
})
