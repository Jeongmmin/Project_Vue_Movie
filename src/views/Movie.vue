<template>
    <div class="container">
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
    </div>
</template>

<script>
export default {
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