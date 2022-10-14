<template>
    <div v-for="(value, index) in $store.getters.getMensajes" :key="index">
        <div v-if="value.texto !== null" :class="`alert ${tipoError(value.tipo)}`">
            {{value.texto}}
            <i class="fa-regular fa-circle-xmark" @click="quitarMensaje(index)"></i>
        </div>
    </div>
</template>

<script>
import store from '@/store';

    export default {
        name: 'appAlert',
        props:[],
        emits:[],
        data(){
            return {
            }
        },
        methods: {
            tipoError(tipo){
                if(tipo === 'error'){
                    return 'alert-danger';
                } else {
                    return 'alert-success';
                }
            },
            quitarMensaje(index){
                this.$store.state.delMensajeIndex = index;
                this.$store.dispatch('delMensajeAction');
            }
        },
        computed: {
        },
        mounted(){
        },
        components: {
        }
    }
</script>

<style>

</style>