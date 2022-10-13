<template>
    <div>
        <h1>tareas</h1>
        <form @submit.prevent="agregarTarea()">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="tarea.titulo" placeholder="Nueva tarea"
                    aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="submit">Agregar</button>
            </div>
        </form>

        <div class="accordion" id="accordionExample">
  
  <div class="accordion-item" v-for="(value, index) in tareas">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseTwo${index}`" aria-expanded="false" :aria-controls="`collapseTwo${index}`">
        <input type="checkbox" :checked="value.terminado" @click="setearCheckbox(value.terminado, value.id)">
        {{value.titulo}}
      </button>
    </h2>
    <div :id="`collapseTwo${index}`" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {{value.contenido}}

        <app-acciones @onAccion="irA($event, value.id)"></app-acciones>
        
      </div>
    </div>
  </div>
  
</div>


    </div>
</template>

<script>
    import AppAcciones from '@/components/AppAcciones.vue';
    export default {
        name: 'tareaView',
        data(){
            return {
                tarea:{
                    titulo: null,
                    contenido: null,
                    terminado: false
                },
                tareas:[]
            }
        },
        methods: {
            agregarTarea(){
                axios({
                    method: "post",
                    url: "http://localhost:4444/tareas",
                    data: this.tarea
                })
                .then(response => {
                    console.log(response);
                    this.tarea.titulo = null;
                    this.getTareas();
                })
                .catch(e => console.log(e));
            },
            getTareas(){
                axios({
                    method: "get",
                    url: "http://localhost:4444/tareas"
                })
                .then(response => {
                    this.tareas = response.data;
                console.log(response);
                })
                .catch(e => console.log(e));
            },
            setearCheckbox(terminado, id) {
                axios({
                    method: "patch",
                    url: "http://localhost:4444/tareas/"+id,
                    data: {
                        terminado: !terminado
                    }
                })
                .then(response => {
                console.log(response);
                })
                .catch(e => console.log(e));
            },
            irA(opcion, tarea_id){
                if(opcion === 'editar'){
                    this.$router.push({name: 'editarTarea', params: {id: tarea_id}});
                } else {
                    if(confirm("Esta seguro de eliminar tarea")){
                        axios({
                            method: "delete",
                            url: "http://localhost:4444/tareas/"+tarea_id
                        })
                        .then(response => {
                            this.getTareas();
                        console.log(response);
                        })
                        .catch(e => console.log(e));
                    }
                }
            }
        },
        computed: {
        },
        mounted(){
            this.getTareas()
        },
        components: {
            AppAcciones
        }
    }
</script>

<style>

</style>