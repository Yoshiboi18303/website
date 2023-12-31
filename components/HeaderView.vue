<template>
    <div>
        <header>
            <div class="site-title">
                <MainIcon />
                <h1>Yoshiboi18303</h1>
            </div>
            <div class="navigation">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/videos">My Videos</NuxtLink>
                <!-- <NuxtLink to="/projects">My Projects</NuxtLink> -->
                <!-- ^ TODO: Add this in after ironing out all the bugs. -->
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import MainIcon from "./MainIcon.vue";
</script>

<style>
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #303030;
}

header:after {
    content: "";
    display: table;
    clear: both;
}

.site-title {
    /* Hold this to the left side of the header */
    float: left;
    margin: 0.5rem;
    display: flex;
}

.site-title h1 {
    margin: 0;
    /* Put the text right in the middle of the logo */
    align-self: center;
    font-weight: 900;
    font-size: 2rem;
}

.navigation {
    float: right;
    margin: 0.5rem;
    display: flex;
    /* Center the elements in the navigation */
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: white;
}

.navigation a {
    margin-left: 1rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-top: 2rem;
}

.navigation a:hover {
    text-decoration: underline;
}
</style>
