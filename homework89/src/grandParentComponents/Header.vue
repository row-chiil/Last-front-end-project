<template>
<div class="link">
    <LinksConmponent></LinksConmponent>
</div>
</template>

<script>
import LinksConmponent from "./parentСomponents/ChildrenComponents/links.vue";

export default{
    name: "HeaderComponent",
    components: {
        LinksConmponent, 

    }
}

</script>

<style scoped>
    .link{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 50px;
        margin-top: 30px;
    }
</style>