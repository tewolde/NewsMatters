<template>

<div>
    <div>
        <h2>{{ post.title }}</h2>
        <!-- <p v-if="author">Written by: <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink> -->
        <!-- </p> -->
        <p>{{ post.body }}</p>
    </div>
<!-- <hr>
<h3>Comments:</h3>
<comment :comments="getPostComments"></comment> -->
</div>

</template>


<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

defineProps(['post'])
</script>

