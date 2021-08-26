<template>
    <div class="container">
        <div :class="{ 'no-result': !movies.length}" 
        class="inner">
            <Loader v-if="loading"></Loader>
            <div 
            v-if="message"
            class="message">
                {{ message }}
            </div>
            <div 
            v-else
            class="movies">
                <MovieItem 
                v-for="movie in movies"
                :key="movie.imdbID"
                :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
import Loader from './Loader.vue'
export default {
    components: {
        MovieItem,
        Loader
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        },
        loading() {
            return this.$store.state.movie.loading
        }
    }
}
</script>

<style scoped>
/* .container {
    max-width: 1364px;   
} */
.container {
    margin-top: 30px;
    /* max-width: 1364px; */
}
.inner {
    background-color: lightgray;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
}
.no-result {
        padding: 70px 0;
    }
.message {
    color: gray;
    font-size: 20px;
}
.movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>