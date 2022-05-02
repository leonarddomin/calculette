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
       update_number1: function (event) {
        this.number1 = event.target.value;
      },
      update_number2: function (event) {
        this.number2 = event.target.value;
      },
      result: function () {
  
        return this.number1 + this.number2;
      }
    },
})