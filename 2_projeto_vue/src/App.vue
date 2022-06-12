<!--App.vue é o componente central toda a aplicação esta sendo baseado nele
ele vai gerencia a aplicação toda-->





<template>
  <div>
    <h1>Olá mundo</h1>

     <button @click="logar($event)">Logar</button>

    <Header v-bind:esta_Logado="false" />

    <!--Taque especial-->
    <PrimeiroComponente />

    <p class="paragrafo-pai">O dado de app é:{{ testando }}</p>

    <LifeCycle />

    <Pessoa />


  </div>
</template>

<script>

import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Header from './components/Header'


export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Header
  },
  data() {
    return {
      testando: "TESTE"
    }
  },
  methods: {

    logar(e) {
      this.esta_Logado = !this.esta_Logado
    }
  }
}
</script>

<style>
body {
  background-color: rgb(176, 175, 215);
  color: rgb(62, 29, 29);
}

a {
  color: rgb(243, 5, 81);
}

.teste {
  background-color: chartreuse;
}

.paragrafo-pai {
  color: crimson;
}
</style>