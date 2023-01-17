<template>
<!-- <div  class="col">
    <a  href="#" class="card" id="list1" style="border-radius: .75rem;height:100; background-color: #2125;">
        <div class="row g-0">
        <div class="col-md-3">
            <svg class="bd-placeholder-img" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
        </div>

        <div  class="col-md-9">
            <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Some Card Text</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button class="btn btn-primary" @click="count++">count is {{ count }}</button>

            </div>
        </div>
        </div>
    </a>
</div> -->
<div class="card" style="background-color: #2125;border-radius: .75rem;">
  <div class="row g-0">
     <!-- <div class="col-md-3">
        <svg class="bd-placeholder-img" width="100%" xmlns="http://www.w3.org/2000/svg" 
        role="img" aria-label="Placeholder: Image" 
        preserveAspectRatio="xMidYMid slice" 
        focusable="false">
        <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
    </div>  -->
    <div class="col-md-12">
      <div class="card-body" style="color: #f0AD4E;">
        <h5 class="card-title">{{ newsItem.name }}</h5>
        <p class="card-text">{{ newsItem.genre }}</p>
        {{ newsItem.country }}
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</template>
<script  lang="ts">
export default {
  props: ['newsItem']
}   

</script>
