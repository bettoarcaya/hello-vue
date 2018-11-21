<template>
  <div id="main" class="hello">
    <ul>
      <li v-for="item in artists" :key="item.name"> {{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import getArtists from '@/api'
export default {
  /* eslint-disable */
  name: 'Home',
  data () {
    return {
      artists: []
    }
  },
  mounted: function() {
    const self = this
    
    getArtists().then( function(response) {
      self.artists = response
    })
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
