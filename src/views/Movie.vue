<template>
    <div class="container">
        <template v-if="loading">
            <div class="skeletons">
                <div class="skeleton poster"></div>
                <div class="specs">
                <div class="skeleton title"></div>
                <div class="skeleton spec"></div>
                <div class="skeleton plot"></div>
                <div class="skeleton etc"></div>
                <div class="skeleton etc"></div>
                <div class="skeleton etc"></div>
                </div>
            </div>
            <Loader class="spinner-border-fixed"
                :size="3"
                :z-index="9"
                fixed />
        </template>
        <div v-else class="movie-details">
            <div 
            :style="{ backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})` }" 
            class="poster"></div>
            <div class="specs">
                <div class="title">
                    {{ theMovie.Title }}
                </div>
                <div class="labels">
                    <span>{{ theMovie.Released }}</span>
                    <span>{{ theMovie.Runtime }}</span>
                    <span>{{ theMovie.Country }}</span>
                </div>
                <div class="plot">
                    {{ theMovie.Plot }}
                </div>
                <div class="ratings">
                    <h3>Ratings</h3>
                    <div class="rating-wrap">
                        <div 
                        v-for="{ Source: name, Value: score } in theMovie.Ratings"
                        :key="name"
                        :title="name"
                        class="rating">
                        <img
                            :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`"
                            :alt="name">
                            <span> {{ score }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Actors</h3>
                    {{ theMovie.Actors }}
                </div>
                <div>
                    <h3>Director</h3>
                    {{ theMovie.Director }}
                </div>
                <div>
                    <h3>Production</h3>
                    {{ theMovie.Production }}
                </div>
                <div>
                    <h3>Genre</h3>
                    {{ theMovie.Genre }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue'
export default {
    components: {
        Loader
    },
    computed: {
        theMovie() {
            return this.$store.state.movie.theMovie
        },
        loading() {
            return this.$store.state.movie.loading
        }
    },
    created() {
        console.log(this.$route)
        this.$store.dispatch('movie/serchMovieWithId', {
            id: this.$route.params.id
        })
    },
    methods: {
        requestDiffSizeImage(url, size = 700) {
            return url.replace('SX300', `SX${size}`)
        }
    }
}
</script>

<style scoped>
.container {
    padding-top: 40px;
}
.skeletons {
    display: flex;
}
.skeleton_poster {
    width: 500px;
    height: 500px * 3/2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: lightgrey;
    flex-shrink: 0;
    

}
.specs {
    flex-grow: 1;
}
.skeleton_title {
    width: 80%;
    height: 70px;
    border-radius: 10px;
    background-color: lightgrey;
}
.skeleton_spec {
    width: 60%;
    height: 30px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: lightgrey;

}
.skeleton_plot {
    width: 100%;
    height: 250px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: lightgrey;
}
.skeleton_etc {
    width: 50%;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: lightgrey;
}
.movie-details {
    display: flex;
    color: gray;
}
.poster {
    width: 400px;
    height: 400px*3/2;
    margin-right: 170px;
    border-radius: 10px;
    background-color: lightgray;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
}
.specs {
    flex-grow: 1;
}
.title {
    color: black;
    font-family: 'Oswald', sans-serif;
    font-size: 70px;
    line-height: 1;
    margin-bottom: 30px;
}
.labels {
    color: #fdc000;
}
span::after {
    content: "\00b7";
    margin: 0 6px;
}
span:last-child::after {
    display:none;
}
.plot {
    margin-top: 20px;
}
h3 {
    margin: 24px 0 6px;
    color: black;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
}
.rating-wrap {
    display: flex;
}
.rating {
    display: flex;
    align-content: center;
    margin-right: 32px;
}
img {
    height: 30px;
    flex-shrink: 0;
    margin-right: 10px;
}
</style>