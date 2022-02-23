<template>
  <div class="about">
  <Contact />
  <h1>This is an about page</h1>
  <h2>TEST</h2>
  </div>

</template>

<script>
import Contact from '@/components/Contact.vue'
import axios from 'axios'

export default {
    name: 'details',
    components: {
        Contact
    },
       data () {
        return {
            contact:[]
        }
    },
     created () {
          axios.get('http://localhost:8082/details.json') 
        .then(response => {
          this.contact = response.data.contact })
          .catch(e => {
      this.errors.push(e)
    })
    },
}
</script>

