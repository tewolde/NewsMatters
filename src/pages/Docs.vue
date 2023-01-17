
<template >
  <layout>
    <template v-slot:navbar>
      <TopNavbar />
      <SearchBox />
    </template>

    <template v-slot:header>
    <div class="row g-0" style="color: white" >
      <div class="col-md-3" style="center" > </div>>
      <div class="col-md-6" style="center" >

              <H1> User Guide</H1>


          Welcome to News Matters, your source for the latest news from around the world. Our minimalistic approach to news aggregation makes it easy for you to find the information you need, when you need it.

        The headlines page is the main hub of our website where you can see brief summaries of the latest news stories. To search simply enter the keywords in to the search bar. You can quickly and easily find news articles from a wide range of sources, including major news outlets, blogs, and more. 

        On the preferences page, you can customize your news experience by selecting specific news sources, changing the number of articles displayed on the headlines page, and setting keyword filters to only see news stories that are relevant to you.

        If you have any additional questions or concerns, please feel free to contact us at [email/contact form]. We value your feedback and are always looking for ways to improve our website.

        Thank you for using News Matters.
        

        <div class="col-md-3" style="center" ></div>
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