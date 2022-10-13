<template>
    <div class="acciones">
        <button class="btn btn-primary m-2" @click="$emit('onAccion','editar')">Editar</button>
        <button class="btn btn-danger m-2" @click="$emit('onAccion','eliminar')">Eliminar</button>
    </div>
</template>

<script>
    export default {
        name: 'appAcciones',
        props:[],
        emits:['onAccion'],
        data(){
            return {
            }
        },
        methods: {
        },
        computed: {
        },
        mounted(){
        },
        components: {
        }
    }
</script>

<style scoped>
.acciones{
    border-top: 1px solid black;
    margin-top: 20px;
}
</style>