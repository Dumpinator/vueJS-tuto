const app = new Vue({
    el: '#app',
    data: {
      titre: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
  })