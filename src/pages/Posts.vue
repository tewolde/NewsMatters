
<template >
  <layout>
    <template v-slot:navbar>
      <TopNavbar />
    </template>

    <template v-slot:header>
      <!-- <SearchBox /> -->
		  <h1 class="h1 text-center" id="pageHeaderTitle">News Headlines</h1>
        <p v-if="loading">Loading posts...</p>
        <p v-if="error">{{ error.message }}</p>

        <div v-if="posts" v-for="post in posts" :key="post.publishedAt">
          <NewsItemCard :post="post" /> 
        </div>
    </template>

    <template v-slot:default>
      <div id="main-panel" class="container-fluid">
    
      </div>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </layout>

</template>



<script setup lang="ts">

import { RouterLink } from 'vue-router'
import Layout from "./layout/Layout.vue"
import TopNavbar from '../components/TopNavbar.vue'
import SearchBox from '../components/SearchBox.vue'
import NewsItemCard from '../components/NewsItemCard.vue'
import Footer from '../components/Footer.vue'
import { usePostsStore } from '../store/posts'
import { storeToRefs } from 'pinia'
const store = usePostsStore()
const { posts, loading, error } = storeToRefs(store)
const { fetchAllNews } = store

fetchAllNews()

</script>



<style scoped>
.news-list-panel h1 {
  text-align: center;
  color: #e1bee7;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 100;
}

.news-list-panel h3 {
  text-align: center;
  color: #e1bee7;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 70;
}

.news-list .col-md-6 {
  min-height: 298px;
}

.news-list .border {
  border-color: rgba(255, 255, 255, .3) !important;
}

.news-list .news-thumbnail {
  background-color: rgba(255, 255, 255, .8);
  padding: 10px;
}

.news-list .news-thumbnail img {
  height: 250px
}

.news-list .news-category {
  color: #e6ee9c !important;
}

.news-list .news-title {
  color: #f0ad4e !important;
}

.news-list .news-author {
  color: #e1bee7 !important;
  font-weight: 400;
}

.news-list .news-description {
  color: #ccc !important;
}

.news-list .input-group .price:before {
  content: '$';
  z-index: 1;
  display: inline-block;
  color: #ccc;
  left: 0px;
  top: 15px;
  width: 20px;
  height: 20px;
  font-size: 18px;
  max-height: 13em;
  position: absolute;
  font-weight: 600;
}

.news-list .input-group input[type=text] {
  flex: none;
  width: 90px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  color: #E4E4E4;
  font-size: 18px;
  padding-top: 15px;
  padding-left: 15px;
  font-weight: 600;
}

.news-list button.add-to-cart {
  width: 50px;
  height: 50px;
  border: 0;
  padding: 0;
}

.news-list button.add-to-cart:hover {
  background-color: #2c3e50 !important;
}

button.add-to-cart img {
  width: 40px;
}
</style>