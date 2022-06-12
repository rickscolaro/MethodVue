
<template>

    <img v-bind:src="avatar" v-bind:alt="descricao" style="width: 100px;
            height: 100px">

    <!-- @mudar_-imagem È uma tag gerada pelo emit com outra sintese-->
    <MudarImagem @mudar_-imagem="trocarIMG" />

</template>

<script>
import MudarImagem from './MudarImagem.vue'

export default {
    name: 'Picture',
    data() {
        return {
            avatar: "/img/avatar.png",
            descricao: "Matheus Batist"
        }
    },
    components: {
        MudarImagem
    },
    methods: {
        trocarIMG() {

            //console.log("AVATAR2")
            this.avatar = '/img/avatar2.png'
        }
    }
}
</script>

<style>
</style>