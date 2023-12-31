<template>
    <div>
        <footer>
            <div class="social-links">
                <SocialLink
                    v-for="link in socialLinks"
                    :key="link.url"
                    :content="link.content"
                    :link="link.url"
                />
            </div>
            <div class="copyright">
                © {{ new Date().getFullYear() }} Yoshiboi18303
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import SocialLink from "~/components/SocialLink.vue";

interface Link {
    content: string;
    url: string;
}

const socialLinks: Link[] = [
    {
        content: "GitHub",
        url: "https://github.com/Yoshiboi18303",
    },
    {
        content: "Discord",
        url: "https://discord.gg/53DZc5SWue",
    },
    {
        content: "Twitch",
        url: "https://twitch.tv/yoshiboi18303",
    },
];
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303030;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
}

.social-links {
    /* Align the links to the left */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 1rem;
}
</style>
