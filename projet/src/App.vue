<template>
<header>
<h1>AWA</h1>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand"> <router-link to="/">Acceuil</router-link></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="color:black;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" ><router-link to="/traiteur">Traiteur</router-link></a></li>
            <li><a class="dropdown-item" href="#">Vente à emporter</a></li>
          </ul>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page"> <router-link to="/services">Nos Services</router-link></a>
        </li> -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="color:black;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos plats
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Entrées et apértitifs</a></li>
            <li><a class="dropdown-item" href="#">Plats</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Boissons</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color:black;" href="#">Contact</a>
        </li>
        <router-link to="/about">about</router-link>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <!-- <div id="nav">
    
    <router-link to="/">Home</router-link>
    <router-link to="/services">Services</router-link> 
    <router-link to="/about">About</router-link> 
   
  </div> -->
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
nav a{
  text-decoration: none;
  font-family: myfont;
  color: black;
}
nav a:hover{
  color: #299934;
}
</style>
