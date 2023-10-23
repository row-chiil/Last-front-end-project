<template >
    <div class="Links">
        <router-link :to="{name: 'Home'}" class="isActive">Домашняя страница</router-link>
        <router-link :to="{name: 'Chat'}" class="isActive">Чат</router-link>
        <router-link :to="{name: 'Maps'}" class="isActive">Карты</router-link>
    </div>
</template>

<script>
    export default{
        name: "LinksConmponent"
    }
</script>

<style scoped>
    .Links{
        width:800px;
        display:flex;
        justify-content: space-between;
    }
    .isActive{
        text-decoration: none;
        color: azure;
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(31, 31, 31, 0.5);
        border-radius: 20px;
    }
</style>