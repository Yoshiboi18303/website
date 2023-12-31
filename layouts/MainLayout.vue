<template>
    <div>
        <Header />

        <div class="main">
            <slot>
                <h1>No content, yet.</h1>
            </slot>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/HeaderView.vue";
import Footer from "../components/FooterView.vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ogTitle: {
        type: String,
        required: true,
    },
    ogDescription: {
        type: String,
        required: true,
    },
});

const { title, description, ogTitle, ogDescription } = props;

// no-undef is false, Nuxt auto-defines useHead and useSeoMeta

// eslint-disable-next-line no-undef
useHead({
    title: `${title} | Yoshiboi18303`,
});

// eslint-disable-next-line no-undef
useSeoMeta({
    title: `${title} | Yoshiboi18303`,
    ogTitle,
    ogDescription,
    description,
});
</script>

<style scoped>
.main {
    margin-top: 20px;
    margin-bottom: 100px;
}
</style>

<style>
/*
  Global CSS styles, do not change unless necessary.
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: "Inter", sans-serif;
}

body {
    background-color: #000;
    color: #fff;
}

h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 900;
}

code {
    font-family: "Source Code Pro", monospace;
}
</style>
