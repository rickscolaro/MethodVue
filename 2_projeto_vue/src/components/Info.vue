<!--Traz as informações de um determinado usuário-->
<!--Este componente vai ser importado-->

<template>
    <div>

        <!--compEmail é props-->
        <p>{{ compEmail }} - {{ email }}</p>

        <!-- o v-if exibe só se for true-->
        <p v-if="esta_trabalhando"> Estou trabalhando no momento</p>
        <!-- O v-else só funciona se estiver embaixo do v-if-->
        <p v-else>Estou em m busca de novas oportunidades
        </p>

        <div>

            <!-- Dando Erro! -->

            <p>----------PROPS---------</p>
            <button @click="propss()">PROPS</button>
            <!-- o v-if exibe só se for true-->
            <p v-if="esta_trabalhandoPROPS"> Estou trabalhando no momento (PROPS)</p>
            <!-- O v-else só funciona se estiver embaixo do v-if-->
            <p v-else>Estou em busca de novas oportunidades(Props)</p>
            <p>------------------------</p>

        </div>

        <!-- <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul> -->


        <!-- Imprimindo o for -->
        <!-- <ul v-for="item in backEnd_Technologies">
            <li>{{ item }}</li>
            <li>A mais</li>
        </ul> -->

        <!-- Imprimindo o for com index -->
        <!-- <ul v-for="(item, index) in backEnd_Technologies" v-bind:key="index">
            <li>{{ item }}</li>
            <li>A mais</li>
        </ul> -->


        <!-- Imprimindo o for direto no elemento que sera repetido -->
        <ul>
            <li v-for="(item, index) in backEnd_Technologies" v-bind:key="index">{{ item }}</li>
            <li>A mais</li>
        </ul>

        <p>Utilizo as seguintes linguagens para FrontEnd</p>
        <ul>
            <li v-for="item in frontEnd_Technologies">{{ item.id }} ) {{ item.language }}</li>
        </ul>


        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>

        <p v-if="1 > 2">Testando</p>
        <p v-if="1 < 2">Testando 2 </p>

        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }} </p>

        <!-- <a href=""></a> NÃO FUNCIONA TEM QUE USAR v-bind -->
        <p class="teste">Para acessar o meu portfolio basta acessar aqui <a v-bind:href="meuLink"> Eu </a></p>
        <Picture />
    </div>
</template>

<script>

import Picture from './Picture.vue'
export default {
    name: "Info",
    data() {
        return {
            esta_trabalhando: true,
            mostrar_email: false,
            email: "matheus@gmail.com",
            meuLink: "https://br.linkedin.com/in/richardhershon-scolaro-corso-428807122?trk=public_profile_samename-profile",
            textoBotao: "Mostrar e-mail",
            backEnd_Technologies: ['JavaScript', 'PHP', 'Python3'],
            frontEnd_Technologies: [
                { id: 1, language: 'HTML' },
                { id: 2, language: 'CSS' },
                { id: 3, language: 'JavaScript' }
            ],


        };
    },
    components: {
        Picture
    },
    methods: {
        showEmail() {
            // console.log("Testando Método")
            this.mostrar_email = !this.mostrar_email// ! quér dizer ao contrario
            if (!this.mostrar_email) {
                this.textoBotao = "Mostrar e-mail"
            } else {
                this.textoBotao = "Esconder email"
            }
        },
        propss() {

            this.esta_trabalhandoPROPS = !this.esta_trabalhandoPROPS
        }

    },
    props: {
        // Usar compEmail em Pessoa.vue pela tag Info
        compEmail: String, // Tipar a variável
        esta_trabalhandoPROPS: Boolean
    }

}
</script>

<style>
</style>