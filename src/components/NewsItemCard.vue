<template>
<div class="card" style="background-color: #2125;border-radius: .75rem;">
  <div class="row g-0">
     <div class="col-md-2">
      <img :src= post.urlToImage width="120" height="100" contain/>
    </div> 
    <div class="col-md-10">
      <div class="card-body" style="color: #f0AD4E;">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.description }}
          <RouterLink :to="`/news-item/${post.publishedAt}`">more ...</RouterLink>
        </p>
        {{ post.country }}
        <p class="card-text"><small class="text-muted">{{ new Date(post.publishedAt)}}</small></p>
      </div>
    </div>
  </div>
</div>

</template>

<script  lang="ts">
// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'
// TimeAgo.addDefaultLocale(en)
//const timeAgo = new TimeAgo('en-US')
import { RouterLink } from 'vue-router'
export default {
  props: ['post']
}   

</script>




<style scoped>



</style>