<template>
    <div class="container">
        <template v-if="loading">
            <div class="skeletons">
            <div class="skeleton_poster">
            </div>
            <div class="specs">
                <div class="skeleton_title" id="skeleton_title"></div> 
                <div class="skeleton_spec"></div> 
                <div class="skeleton_plot"></div> 
                <div class="skeleton_etc"></div> 
                <div class="skeleton_etc"></div> 
                <div class="skeleton_etc"></div> 
            </div>
            </div>
            <loader class="spinner-border-fixed"
            :size="3"
            :zIndex="9"
            ></loader>
        </template>
        <div v-else class="movie-details">
            <div class="poster"></div>
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
            id:'this.$route.params.id'
        })
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
</style>