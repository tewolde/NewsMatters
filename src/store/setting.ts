import { defineStore } from 'pinia'

const  resource =  {
    uRL: `http://newsapi.org/v2/`,
    apiKey: `216abe63419744cf8d42117076507b69`,
    endpoints: 'everything',//'|'top-headlines
    source: 'sources',
};
type UserSettings ={
    country: string;
    language: string;
    querystring: string; // must be url encoded and validated
    pageSize: number;
};

export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            country: "",
            language: "",
            querystring: 'everything',//`AI AND (technology OR science) NOT arts`,
            pageSize: 50,
            //url : getDefaultURL(),
            resource:resource,
            
        } as UserSettings;
    },
    getters: {
        getDefaultURL: (state) => {
         //return state.url = `http://newsapi.org/v2/top-headlines?q=${ state.querystring }&apiKey=216abe63419744cf8d42117076507b69`
        }

    },
    actions:{
        setQueryString(qSearch: string) {
            this.querystring = qSearch
        },
        
    }
})

// function getDefaultURL(this: any) {
//     return this.url = `http://newsapi.org/v2/top-headlines?q=${ this.querystring }&apiKey=216abe63419744cf8d42117076507b69`

// }
