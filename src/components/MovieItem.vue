<template>
        <div
        :style="{ backgroundImage: `url(${movie.Poster})` }"
        class="movie">
        <div class="info">
            <div class="year">
                {{ movie.Year }}
            </div>
            <div class="title">
                {{ movie.Title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            typeof: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
.movie {
    /* $width: 168px; */
    width: 200px;
    height: 300px;
    margin: 10px;
    border-radius: 4px;
    background-color: rgb(200, 203, 206);
    background-size: cover;
    overflow: hidden; 
    position:relative;

    
}
.movie:hover::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 6px solid #fdc000;
    }
.info {
    background-color: rgba(3, 3, 3, 0.3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
}
.year{
    color: #fdc000;
}
.title {
    color: wheat;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>