<template>
   <div>
       <p>test formualaires</p>
    <h1>{{nom}}</h1>
    <p>{{prenom}}</p>
    <p>{{mail}}</p>
    </div>
</template>

<script>

export default {
    name: 'contact',
    props: {
        nom: String,
        prenom: String,
        mail: String,
    }
}

</script>
