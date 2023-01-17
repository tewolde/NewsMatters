
<template>
 <layout>
    <template v-slot:navbar>
      <TopNavbar />
      <SearchBox />
    </template>

    <template v-slot:header>
    </template>

    <template v-slot:default>
      <div id="main-panel" class="container-fluid">
    
        <div>
          <p v-if="newsStore.loading">Loading post...</p>
          <p v-if="newsStore.error">{{newsStore.error.message }}</p>
          <div v-if="newsStore.post">
            <Post :post="newsStore.post" />
          </div>
        </div> 


		  
      </div>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </layout>

</template>


<script  lang="ts">
  import TopNavbar from '../components/TopNavbar.vue'
  import Footer from '../components/Footer.vue'
  import Layout from "./layout/Layout.vue"
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useNewsStore } from '../store/news'
 
  import Post from "../components/Post.vue"



 
  const route = useRoute() 
  const { post, loading, error } = storeToRefs(useNewsStore())
  const { getPostDetails } = useNewsStore()
 
export default {
  setup(){

    getPostDetails('route.params.id')
  },
  components: {
    Layout,
    TopNavbar,
    Post,
    Footer
  },
  computed: {},

  mounted() {
  },

  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>