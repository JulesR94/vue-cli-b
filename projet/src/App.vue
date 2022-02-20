<template>
<header>
<h1>AWA</h1>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/services">Services</router-link> 
 
    <!-- <router-link to="/services">Nos services</router-link> -->
    <router-link to="/about">About</router-link> 
   
  </div>
</header>
<router-view />

</template>

<script>

</script>


<style scoped>
@font-face {
  font-family: myfont;
  src: url("../police/AlfaSlabOne-Regular.ttf");
}
header{
background-color: #FFA945;
}
h1{
  font-family: myfont;
  color: #299934;
  display: flex;
  justify-content: center;
}
#nav{

display: flex;
justify-content: space-around;
}
a{
  text-decoration: none;
  font-family: myfont;
  color: black;
}

</style>
