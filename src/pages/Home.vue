

<template>
  <layout>
    <template v-slot:navbar>
      <TopNavbar />
      <SearchBox />
    </template>
    <template v-slot:header>
    </template>

    <template v-slot:default>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </layout>
</template>




<script  lang="ts">
import Layout from "./layout/Layout.vue"
import TopNavbar from '../components/TopNavbar.vue'
import SearchBox from '../components/SearchBox.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Layout,
    TopNavbar,
    SearchBox,
    Footer
  },
  data() {
    return {
    }
  },
}
</script>


<style scoped >

</style>