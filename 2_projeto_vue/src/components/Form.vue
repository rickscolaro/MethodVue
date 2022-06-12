

<template>

    <!-- Para ter acessos ao $event tem que adicionar (e) na função do method -->
    <form action="" @submit="enviarFormulario($event)">

        <h2>Importado direto da pasta Form que são os componentes de formulário</h2>
        <div>

            <!-- <InputText /> -->

            <input type="text" v-model="name">

        </div>
        <div>

            <!-- <InputText /> -->

            <input type="text" v-model="email">

        </div>
        <div>
            <Submit />
        </div>


    </form>

</template>

<script>
import InputText from './Form/InputText.vue'
import Submit from './Form/Submit.vue'

export default {
    name: "Form",
    components: {
        InputText,
        Submit
    },
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(e) {

            e.preventDefault()// Ignorou o evento padrão do Vue que é enviar para o servidor. Não deixa dar reload na pagina

            // Dados do formulário
            const name = this.name
            const email = this.email

            console.log("O nome é: " + name)
            console.log("O email é: " + email)
            console.log("Formulário Enviado!")

        }
    }


}
</script>

<style>
</style>