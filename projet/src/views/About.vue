<template>
  <div class="about">
  <Contact />
  <Formulaires />
  <h2>Test about view</h2>
  </div>

</template>

<script>
import Contact from '@/components/Contact.vue'
import Formulaires from '@/components/Formulaires.vue'

import axios from 'axios'

export default {
    name: 'details',
    components: {
        Contact, Formulaires
    },
       data () {
        return {
            contact:[]
        }
    },
     created () {
          axios.get('http://localhost:8080/details.json') 
        .then(response => {
          this.contact = response.data.contact })
          .catch(e => {
      this.errors.push(e)
    })
    },
}
</script>

