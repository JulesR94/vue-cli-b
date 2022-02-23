<template>
    <div class="contact">
    <Formulaires v-for="(toto,index) in details" :key="index" :nom="toto.nom" :prenom="toto.prenom" :mail="toto.mail"/>
    </div>
</template> 

<script>
// import axios from 'axios'
import Formulaires from '@/components/Formulaires.vue'

export default {
name: 'contact',
components: {
    Formulaires
},
    // data () {
    //     return {
    //         contact:[]
    //     }
    // },
    // created () {
    //     axios
    //     .get('http://localhost:8082/details.json') 
    //     .then(response => (this.contact = response.data.contact) )
    // },
}
</script>
