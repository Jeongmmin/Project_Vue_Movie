<template>
  <Headline></Headline>
  <Search></Search>
  <MovieList></MovieList>
</template>

<script>
import Headline from '../components/Headline.vue'
import Search from '../components/Search.vue'
import MovieList from '../components/MovieList'
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    Headline,
    Search,
    MovieList
  }
}
</script>
