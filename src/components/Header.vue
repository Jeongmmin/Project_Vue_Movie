<template>
    <header>
        <Logo></Logo>
        <div class="nav nav-pills">
            <div v-for="nav in navigations" :key="nav.name" class="nav-item">
                <router-link
                    :to="nav.href"
                    active-class="active"
                    :class="{ active: isMatch(nav.path) }"
                    class="nav-link"
                >
                    {{ nav.name }}
                </router-link>
            </div>
        </div>
        <div class="user" @click="toAbout">
            <img :src="image" :alt="name" />
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from "../components/Logo.vue";

export default {
    components: {
        Logo,
    },
    data() {
        return {
            navigations: [
                {
                    name: "Search",
                    href: "/",
                },
                {
                    name: "Movie",
                    href: "/movie/tt4520988",
                    path: /^\/movie/,
                },
                {
                    name: "About",
                    href: "/about",
                },
            ],
        };
    },
    computed: {
        ...mapState('about', [
            'image',
            'name',
        ])
    },
    methods: {
        isMatch(path) {
            if (!path) return false;
            console.log(this.$route);
            return path.test(this.$route.fullPath);
        },
        toAbout() {
            console.log("!!!");
            this.$router.push("/about");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/main";
header {
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 40px;
    position: relative;
    .logo {
        margin-right: 40px;
    }
    .user {
        width: 40px;
        height: 40px;
        padding: 6px;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: $gray-200;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 40px;
        margin: auto;
        transition: 0.4s;
        &:hover {
            background-color: darken($gray-200, 10%);
        }
        img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
        }
    }
    @include media-breakpoint-down(sm) {
        .nav {
            display: none;
        }
    }
}
</style>