<template>
   <div>
       <p>test formualires</p>
    <h1>{{nom}}</h1>
    <p>{{prenom}}</p>
    <p>{{mail}}</p>
    </div>
</template>

<script>

export default {
    name: 'formulaires',
    props: {
        nom: String,
        prenom: String,
        mail: String,
    }
}

</script>
