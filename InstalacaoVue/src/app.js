const MyNameApp = {
  data() {
    //Retornara para fronte
    return {
      name: "",
      age: 30,
      input_name: "",
    };
  },
  // È onde fica as funções da aplicação ex: Click do botão
  methods: {
    submitForm(e) {
      e.preventDefault(); // Não deixa o formulario ser enviado para o servidor
      console.log("Caiu aqui"); // Evento do click
      console.log(this.input_name); // this. pois se refere a instancia de fora(data)
      this.name = this.input_name; // Transforma o valor do html igual ao valor do input
    },
  },
};
// CreateApp vem do script importado do Vue
// #app é <div id="app">
Vue.createApp(MyNameApp).mount("#app");
