<template>
    <div class="contact">
        <h1>test contact</h1>
    <Contact v-for="(contact,index) in contacts" :key="index" :nom="contact.nom" :prenom="contact.prenom" :mail="contact.mail"/>
    </div>
</template> 

<script>
// import axios from 'axios'
import Contact from '@/components/Contact.vue'
import axios from 'axios'

export default {
name: 'contact',
components: {
    Contact
},
    data () {
        return {
            contacts:[],
        }
    },
    created () {
        axios
        .get('http://localhost:8084/details.json') 
        .then(response => (this.contacts = response.data.contacts) )
    },
}
</script>
