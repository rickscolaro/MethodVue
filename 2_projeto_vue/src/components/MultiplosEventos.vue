
<template>

    <div>
        <!--Ativa varios eventos com um click-->
        <button @click="primeiro($event), segundo($event), terceiro(txt, $event)">Ativar Múltiplos Eventos</button>
        <p>{{ multiplos_Eventos }}</p>
    </div>

</template>

<script>

export default {
    name: 'MultiplosEventos',

    data() {
        return {
            multiplos_Eventos: "",
            txt: "Terceiro Evento!"
        }
    },
    methods: {
        primeiro(e) {

            //console.log("Primeiro Evento Ativado!")

            this.multiplos_Eventos = "Primeiro Evento Ativado!"
        },

        // Muda o texto
        segundo(e) {
            setTimeout(() => this.multiplos_Eventos = "Segundo Evento!", 1000)
        },

        terceiro(txt, e){
            setTimeout(() => this.multiplos_Eventos = txt, 2000)
        }
    }
}
</script>

<style scoped>
div {
    margin: 100px;
}
</style>