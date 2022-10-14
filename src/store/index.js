import { createStore } from 'vuex'

export default createStore({
  state: {
    soloTerminado: false,
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
    },
    getSoloTerminado(state){
      return state.soloTerminado;
    }
  },
  mutations: {
    addMensaje(state){
      state.mensajes.push(state.mensaje);
    },
    delMensaje(state){
      state.mensajes.splice(state.delMensajeIndex,1);
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
