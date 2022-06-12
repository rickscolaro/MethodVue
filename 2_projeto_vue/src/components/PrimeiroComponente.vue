
<template>

    <h1>Olá Vue!</h1>
    <p> O meu nome é {{ nome }}</p>
    <p>Trabalho como {{ profissao }}</p>

    <MultiplosEventos/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>

</template>


<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'

export default {

    //este name é usado para exportar a tag para renderizar o
    //componente
    name: 'PrimeiroComponente',
    data() {
        return {
            nome: "Matheus",
            profissao: "Programador"
        }
    },
    components: {
        MultiplosEventos,
        Reutilizacao
    }
}
</script>

<style>
</style>