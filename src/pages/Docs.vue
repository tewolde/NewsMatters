
<template >
  <div class="wrapper">
    <TopNavbar />

    <div class="parallax__layer parallax__layer--3">
      <div id="stars" class="top-stars">&nbsp;</div>
    </div>
    <div class="parallax__layer parallax__layer--2">
      <div id="clouds" class="top-clouds">&nbsp;</div>
    </div>
    <div class="top-trees">&nbsp;</div>
    <Footer />
  </div>

</template>


<script  lang="ts">
import TopNavbar from '../components/TopNavbar.vue'
import Footer from '../components/Footer.vue'
import Layout from "./layout/Layout.vue"

export default {
  components: {
    Layout,
    TopNavbar,
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