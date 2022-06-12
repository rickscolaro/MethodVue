
<template>
    <ul>

        <li><a href="#">Home</a></li>
        <li><a href="#">Projeto</a></li>
        <li><a href="#">Contato</a></li>

        <li v-if="esta_Logado"><a href="#">Meu Perfil</a></li>

    </ul>
</template>

<script>
export default {
    name: 'Header',
    props: ["esta_Logado"],
    
}
</script>

<!-- scoped diz que este estilo é so para este elemento -->
<style scoped>
ul {
    list-style: none;
    display: flex;
}

li {
    margin-right: 10px;
}

a {
    color: antiquewhite;
    text-decoration: none;
    transition: .5s;
}

a:hover {
    color: rgb(175, 45, 168);
}
</style>