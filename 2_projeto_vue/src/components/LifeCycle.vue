<!--Ciclo de vida aplicação-->
<!-- Eventos que podem ser acionados em 
determinados partes do programa-->

<template>
    <h1>Me nome é: {{ nome }} </h1>
</template>

<script>


export default {
    name: "LifeCycle",
    data() {
        return {
            nome: "Aindan Não Sei"
        }
    },
    // Criação de componente
    // created: Carregammento de dados dinamicos (ex: Banco de dados )
    created() {
        setTimeout(() => {
            this.nome = "Rick"
        }, 3000)// Acontece 3 segundos depois do mounted
        this.nome = "Matheus"

        this.lifeCycle()// Chama quando cria 
    },
    mounted() {
        this.nome = "Pedro"

        this.lifeCycle()// Chama quando monta
    },
    methods: {
        lifeCycle(p) {
            console.log(p="Executou")
        }
    } 

}
</script>

<style>
</style>