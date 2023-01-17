import { defineStore } from 'pinia'


export const useNewsStore = defineStore( {
  id: 'news',
  state: () => ( {
    posts: [],
    post: {},
    loading: false,
    pageSize: 20,
    gueryString: 'Technology',
    error: null
  } ),

  getters: {
    getPostDetails: (state) =>
    {
        return (post) =>{
          return  state.post = state.posts.filter((post) => post.publishedAt === 'route.params.id')
        }
    }
  },

  actions: {
    async fetchAllNews() {
      var url = `http://newsapi.org/v2/top-headlines?q=${ this.gueryString }&apiKey=216abe63419744cf8d42117076507b69`
      this.posts = []
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