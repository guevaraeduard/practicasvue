<template>
  <div>
    <h1>¿Quien es este pokemon?</h1>
    <pokemonPinture :pokemonId="4" :showpokemon="true"/>
    <pokemonOptions/>
    
  </div>
</template>

<script>

import pokemonOptions from "@/components/pokemonOptions.vue";
import pokemonPinture from "@/components/pokemonPinture.vue";

export default {
    components:{
        pokemonOptions,
        pokemonPinture
    }
}
</script>

<style>

</style>