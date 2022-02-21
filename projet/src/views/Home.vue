<template>
  <div class="home">
    <img alt="homepage" src="../assets/AfriknFusion_AfriknMixAgneau.png">
    <div class="present">
        <h2>Qui sommes nous?</h2>
        <p>Amoureux de cuisine et des saveurs, nous avons naturellement décidé de faire de notre passion un métier, c’est grace à cela que nous pouvons vous proposer aujourd’hui un service de traiteur pour vos événements mais également de vente à emporter.
        </p>
    </div>
    <div class="button">
<button type="button">DEVIS</button>
</div>
<footer>
    <nav>
        <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Qui sommes nous?</a></li>
            <li><a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228" target="_blank">Mentions légales</a></li>
            <li><a href="">Conditions général de ventes</a></li>
            <li><a href="">Inscription Newsletter</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Plan du site</a></li>
        </ul>
    </nav>
    <p>Copyright &copy; 2021</p>
    <div id="icon2">
        <div class="fb"><a href="https://fr-fr.facebook.com/" target="_blank" alt="facebook"><img src="../assets/icon/facebook.png" alt="facebook"></a></div>
        <div class="insta"><a href="https://www.instagram.com/?hl=fr" target="_blank"><img src="../assets/icon/instagram.png" alt="instagram"></a></div>
        <div class="wh"><a href="https://web.whatsapp.com/" target="_blank"><img src="../assets/icon/whatsapp.png" alt="whatsapp"></a></div>
    </div> 
</footer>
  </div>
</template>

<script>

</script>

<style scoped>
img{
  width:100%;
}
footer{
    background-color: #636363;
    height: 100%;
    padding: 5px;
    opacity: 0.9;
  }
  
  footer a {
    color: white;
    font-weight: bold;
    font-size: small;
    font-family: Arial;
    text-decoration: none;
    transition: color .3s;
    
  }
  
  footer nav ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    line-height: 19px;
  }
  
  footer nav a:hover {
    color: #cf4a11;
    -webkit-transition: color .3s;
    transition: color .3s;
  }
  
  footer p {
    padding: 1px;
    margin-left: 1px;
    margin-top: -40px;
  }
  #icon2 img {
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  
  #icon2 {
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
    margin-top: -52px;
  }
  .present {
    color: #299934;
    font-family: Arial;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin: -1% 20% 1% 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
  }
  .present p{
    margin-bottom: 30px;
  }
  h2 {
    font-weight: bold;
    color: #299934;
    font-family: Arial;
    text-align: center;
    margin-top: 40px;
  }
button{
      background-color: #cf4a11;
      color: #299934;
      border-radius: 10px;
      font-family: myfont;
      width: 160px;
      height: 60px;
      margin-top: 30px;
      margin-bottom: 50px;
      display: flex; 
      justify-content: center;
      align-items: center;
       
  }
</style>
