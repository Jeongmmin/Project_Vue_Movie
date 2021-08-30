<template>
    <div class="container">
        <h1>
        <span>JMDb API</span><br>
        THE OPEN
        MOVIE DATABASE
        </h1>
        <div class="container">
        
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://images2.alphacoders.com/789/thumb-1920-789853.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <!-- <img src="https://wallpapertops.com/walldb/original/f/6/8/437218.jpg" class="d-block w-100" alt="..."> -->
            <img src="https://i.imgur.com/WManqQL.jpg" class="d-block w-100" alt="...">
            <!-- <img src="https://images2.alphacoders.com/789/thumb-1920-789853.jpg" class="d-block w-100" alt="..."> -->
            <!-- <img src="https://t1.daumcdn.net/cfile/tistory/21070B395466C1101D" class="d-block w-100" alt="..."> -->
            </div>
            <div class="carousel-item">
            <img src="https://wallpapertops.com/walldb/original/f/6/8/437218.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://i.imgur.com/WManqQL.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        <p>
            The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br>
            If you find this service useful, please consider making a one-time donation or become a patron.
        </p>
    </div>
    
</template>

<style lang="scss" scoped>
@import "../scss/main";
.container {
    padding-top: 40px;
}
h1 {
    line-height: 1;
    font-family: "Oswald", sans-serif;
    font-size: 60px;
    span {
        color: $primary;
    }
}
p {
    margin: 30px 0;
    color: $gray-600;
}
.carousel {
    margin: auto 100px;
    
}
/* img {
    border-image-outset: 30px black;
} */
/* .carousel-inner {
    height: ;
} */
    /* color: #fdc000; */
</style>