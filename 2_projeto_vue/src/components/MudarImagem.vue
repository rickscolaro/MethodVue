<template>
    <div>
        <button @click="$emit('mudar_Imagem')">Trocar imagem de perfil</button>
    </div>
</template>

<script>
export default {
    name: "MudarImagem",
    emits: ['mudar_Imagem']
}
</script>

<style>
</style>