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
    :hover {
      text-decoration-color: $primary;
    }
}
.nav-item {
    :hover {
      text-decoration-color: black;
    }
}
</style>