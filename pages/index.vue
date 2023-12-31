<template>
    <MainLayout
        title="Home"
        description="Home page"
        ogTitle="Yoshiboi18303"
        ogDescription="Home page"
    >
        <MainIcon :width="width" :height="height" />
        <h1>Yoshiboi18303</h1>
        <p style="padding-bottom: 5rem">
            A dumbass that codes in TypeScript, PowerShell and Vue.
        </p>

        <div class="skilled-in">
            <h2>Skilled with:</h2>
            <SkillList />
        </div>

        <div class="website-information">
            <h2>This website was made with</h2>
            <SkillList
                :skillList="[
                    {
                        name: 'Nuxt',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg',
                        link: 'https://nuxt.com',
                    },
                    {
                        name: 'Vue',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
                        link: 'https://vuejs.org',
                    },
                    {
                        name: 'TypeScript',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
                        link: 'https://www.typescriptlang.org',
                    },
                ]"
            />
        </div>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
import MainIcon from "~/components/MainIcon.vue";

/*
 * ------------------------------------------------------------------
 * --------------------------- IMAGE SIZE ---------------------------
 * ------------------------------------------------------------------
 */
const width = 156;
const height = width;
</script>

<style scoped>
.skilled-in {
    padding-bottom: 5rem;
}
</style>
