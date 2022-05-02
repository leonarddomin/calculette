// Léonard et Brice H //
// Déclaration d'une instance de Vue //
const myCalc = new Vue({
    el: '#template',
    data: {
        //
        number : "0" ,
        verif: false
    }, 
// Déclaration de la Méthode //
    methods: {
    
        print(nombre) {
            if (this.number == "0") {
                this.number = ""
                this.number += nombre
                this.verif = false
            } 
            else {
                this.number += nombre
                this.verif = false
            } 
            console.log(this.number)
        },
// Pour Reset la Calculette //
       clear: function() {
           this.number = "0"
       },
// Pour afficher le résultat //
      results: function() {
          this.number = eval(this.number)
      },
// Pourcentage //
      pourcent: function() {
          this.number = (this.number/100)
      }, 
// Vérification pour les Operator //
     printOperator: function(o){
        this.number += o 
        this.verif = true
     }
    },
}) 