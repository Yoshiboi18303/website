<template>
    <div>
        <a :href="props.link" target="_blank" rel="noopener noreferrer">{{
            props.content
        }}</a>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    content: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 1.5rem;
    /* Space the links apart */
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    display: inline-block;
    width: 10rem;
    transition: 0.5s;
}

a:hover {
    color: #9dff00;
}
</style>
