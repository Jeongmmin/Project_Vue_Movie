<template>
  <div class="about">
    <div class="photo">
      <Loader
      v-if="imageLoading"
      class="spinner-border-absolute">
      </Loader>
      <img 
      :src="image" 
      :alt="name">
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue'
export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    image() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    },
    email() {
      return this.$store.state.about.email
    },
    blog() {
      return this.$store.state.about.blog
    },
    phone() {
      return this.$store.state.about.phone
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style scoped>
.about {
  text-align: center;
}
.photo {
  position: relative;
}
img {
  width: 250px;
  height: 250px;
  margin: 40px auto 20px;
  padding: 30px;
  border: 10px solid lightgray;
  border-radius: 50%;
  box-sizing: border-box;
  text-align: center;
  background-color: lightgray;
}
.name {
  font-size: 40px;
  font-family: "Oswald", sans-serif;
  margin-bottom: 20px;
}
</style>
