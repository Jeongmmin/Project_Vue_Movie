<template>
    <footer>
        <Logo></Logo>
        <a href="http://google/com"
        target="_blank">
        (c){{ new Date().getFullYear() }} JEONGMIN</a>
    </footer>
</template>

<script>
import Logo from './Logo.vue'
export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
footer {
    padding: 70px 0;
    text-align: center;
    opacity: 0.5;
}
.logo {
    display: block;
    margin-bottom: 4px;
}
</style>