import { defineStore } from 'pinia'
import { useSettingStore } from './setting'
const settingStore = useSettingStore()


export const usePostsStore = defineStore('posts', {
    state: () => ({
      posts: [],
      loading: false,
      error: null
    }),
    getters: {
      getPostsPerAuthor: (state) => {
        return (authorId) => state.posts.filter((post) => post.userId === authorId)
      },
    //   fetchPost( id): (state) => {
    //   {
    //     return (post) => state.posts.filter((post) => post.publishedAt === id)
        
    //   }
    }, 
    actions: {
      async fetchAllNews() {
        var url = `http://newsapi.org/v2/everything?q=${ settingStore.querystring }&apiKey=216abe63419744cf8d42117076507b69`
        this.posts = []
        console.log(url)
        this.loading = true
        try {
          this.posts = await fetch( url ).then( ( res ) => { return res.json() } ).then( ( data ) => { return data.articles } )
        } 
        catch ( error ) {
          this.error = error;
        } finally {
          console.log(this.posts)
          this.loading = false
        }
      }
      
    }
})