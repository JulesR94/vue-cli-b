<template>
  <div class="services">
    <div class="menu">
            <a href="">NOS SERVICES</a>
            <a href="">NOS PLATS</a>
            <a href="">NOS BOISSONS</a>
            <a href="">VENTE A EMPORTER</a>
            <a href="">CONTACT</a>
        <Footer />
        </div>
  </div>
  
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
    name: 'services',
    components: {
        Footer,
    }
}

</script>

<style scoped>  
  .menu nav ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    list-style-type: none;
    margin-top: 11px;
  }

  .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-family: Arial;
    font-weight: bold;
  }

  .menu a {
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-family: Arial;
    height: 20px;
    padding: 15px;
    margin: 5% 5% 0% 5%;
    border-radius: 30px 30px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: orange  ;
  }
</style>


