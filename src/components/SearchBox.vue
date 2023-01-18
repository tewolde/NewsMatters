

<template>
<!-- <div id="top-section" class="top-text">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center">
        <div class="col-12"><h1>News Matters</h1></div>
        <div class="col-12"><p>Breaking News which Matters to you!</p></div>
      </div>

      <div class="d-flex flex-wrap align-items-center">
        <div class="col-md-2 col-lg-3 col-1"></div>
        <div class="col-md-8 col-lg-6 col-sm-10 col-10">

          <form @submit.prevent="" class="col-12">
            <input 
             type="search"
             :value="queryString" 
             autofocus 
             @input="onQSearch" 
            class="form-control form-control-dark" 
            placeholder=" Search News... " 
            aria-label="Search">
            <button type="submit" class="submit"><img src="/images-cloud/search.svg" alt="Search"></button>
          </form>
        </div>
        <div class="col-md-2 col-lg-3 col-1"></div>
      </div>
    </div>
</div> -->

<div id="top-section" class="top-text">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center">
        <div class="col-12"><h1>News Matters</h1></div>
        <div class="col-12"><p>Breaking News which Matters to you!</p></div>
      </div>

      <div class="d-flex flex-wrap align-items-center">
        <div class="col-md-2 col-lg-3 col-1"></div>
        <div class="col-md-8 col-lg-6 col-sm-10 col-10">

          <form  @submit="onSubmit" class="col-12">
            <input v-model="store.querystring" autofocus type="search" class="form-control form-control-dark" placeholder="Search News..." aria-label="Search">
            <button type="submit" class="submit"><img src="/images-cloud/search.svg" alt="Search"></button>
          </form>
        </div>
        <div class="col-md-2 col-lg-3 col-1"></div>
      </div>
    </div>
  </div>

</template>

<script setup >
import { useRouter } from 'vue-router';
import {useSettingStore} from "../store/setting"
const store = useSettingStore();
const router = useRouter()
function onSubmit() { 
  router.push({ path: '/posts/' })
}
</script>

