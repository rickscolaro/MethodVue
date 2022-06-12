
<template>

    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <Info />

    <!--Mesmo replicado este Info é diferente do de cima-->
    <Info />

    <!-- Passando Props em Info-->
    <Info v-bind:comp-email="compEmail" v-bind:esta_trabalhandoPROPS="false" />


    <Form />


</template>

<script>
import Info from './Info.vue'
import Form from './Form.vue'
export default {
    name: "Pessoa",
    data() {
        return {
            nome: "Matheus",
            compEmail: "ricardo@email.com"
        }
    },
    components: {
        Info,
        Form
    }
}
</script>

<style>
</style>