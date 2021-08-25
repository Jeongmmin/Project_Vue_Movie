<template>
    <header>
        <Logo></Logo>
        <div class="nav nav-pills">
            <div v-for="nav in navigations" 
                :key="nav.name" 
                class="nav-item">
                    <router-link 
                        :to="nav.href"
                        active-class="active"
                        class="nav-link">
                        {{ nav.name }}
                    </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name:'Search',
                    href:'/'
                },
                {
                    name:'Movie',
                    href:'/movie/tt4520988'
                },
                {
                    name:'About',
                    href:'/about'
                }
            ]
        }
    }
}
</script>

<style scoped>
header {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    position: relative;
}
.logo {
    margin-right: 40px;
}
</style>