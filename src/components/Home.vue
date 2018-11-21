<template>
  <div id="main" class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="select-group mb-3 mb-md-0">
            <span class="select-text">Pais</span>
            <select class="custom-select text-left" v-model="country">
              <option v-for="count in countriesList" :key="count.name" :value="count.value">
                {{ count.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <spinner v-show="loading"></spinner>
        <div class="col-md-3" v-for="item in artists" :key="item.name">
          <h2>
            <a :href="item.url" target="_blank">{{ item.name }}</a>
          </h2>
          <img :src="item.image[2]['#text']">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getArtists from '@/api'
import Spinner from './Spinner.vue'
export default {
  /* eslint-disable */
  name: 'Home',
  data () {
    return {
      artists: [],
      countriesList: [
        {name: 'Venezuela', value: 'venezuela'},
        {name: 'Colombia', value: 'colombia'},
        {name: 'Argentina', value: 'argentina'}
      ],
      country: 'Venezuela',
      loading: true
    }
  },
  components:{
    Spinner
  },
  methods: {
    refreshArtists (){
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.country).then( function(response) {
        self.loading = false
        self.artists = response
      })
    }
  },
  mounted () {
    this.refreshArtists();
  },
  watch: {
    country (){
      this.refreshArtists();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
