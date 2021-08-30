<template>
  <Header />
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "scss/main";
.nav-link {
    color: $gray-600;
}
.router-link {
    :hover {
      text-decoration-color: black;
    }
}
select > option:hover {
  color: #888;
  cursor: pointer;
}
</style>