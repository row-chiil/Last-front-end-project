<template >
    <div class="Links">
        <router-link :to="{name: 'Home'}">Домашняя страница</router-link>
        <router-link :to="{name: 'Chat'}">Чат</router-link>
        <router-link :to="{name: 'Maps'}">Карты</router-link>
    </div>
</template>

<script>
    export default{
        name: "LinksConmponent"
    }
</script>

<style scoped>
    .Links{
        width:400px;
        display:flex;
        justify-content: space-between;
    }
</style>