const app = Vue.createApp({
   /* template: `
        <h1>Hola mundo</h1>
        <p>Desde app.js</p>
    `*/
    //Una función que devuelve el estado reactivo inicial para la instancia del componente.
    //data crea objeto reactivo
    data(){
        return{
            peli: 'Yo soy batman',
            autor: 'Bruce Wayne'
        }
    },
    methods:{
        imprime(){
            console.log('Hola mundo')
            this.autor = 'Eduard Guevara'
            this.mayuscula()
        },
        mayuscula(){
            this.peli = this.peli.toUpperCase()
        }
    }
})
//Monta la instancia de la aplicación en un elemento contenedor. 
//En otras palabras me pone el template en el html que contenga el id que le estoy pasando
app.mount('#myapp')