const myCalc = new Vue({
    el: '#template',
    data: {
        number : "0" 
    }, 
    methods: {
        print(nombre) {
            this.number += nombre
        },
       clear: function() {
           this.number = ""
       },
      somme: function() {
          
      }
    },
})