<template>
    <div>
        <SkillVue
            v-for="skill in skills"
            :key="skill.name"
            :name="skill.name"
            :icon="skill.icon"
            :link="skill.link"
        />
    </div>
</template>

<script lang="ts" setup>
import SkillVue from "./SkillView.vue";

interface Skill {
    name: string;
    icon: string;
    link: string;
}

const props = defineProps({
    skillList: {
        type: Array<Skill>,
        required: false,
        default: () => null,
    },
});

const skills: Skill[] = props.skillList || [
    {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "Vue",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        link: "https://vuejs.org/",
    },
    {
        name: "Nuxt",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg",
        link: "https://nuxt.com/",
    },
    {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        link: "https://nodejs.org/",
    },
    {
        name: "PowerShell",
        icon: "https://icon.icepanel.io/Technology/png-shadow-512/Powershell.png",
        link: "https://docs.microsoft.com/en-us/powershell/",
    },
    {
        name: "VS Code",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        link: "https://code.visualstudio.com/",
    },
];
</script>

<style scoped>
div {
    /* Horizontally align the list */
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(98, 98, 98);
}

@media screen and (max-width: 700px) {
    div {
        justify-content: space-around;
    }
}

@media screen and (max-width: 400px) {
    div {
        justify-content: center;
        flex-direction: row;
    }
}

div > * {
    margin: 10px;
}
</style>
