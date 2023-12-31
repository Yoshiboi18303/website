<template>
    <MainLayout
        title="Videos"
        description="View the videos I've published to YouTube!"
        ogTitle="Videos"
        ogDescription="View the videos I've published to YouTube!"
    >
        <div v-if="error">
            <h1>Failed to load videos...</h1>
            <code>{{ error }}</code>
        </div>
        <div v-else-if="videos.length == 0">
            <h1>Loading... <i>(or there are no videos to show)</i></h1>
        </div>
        <div v-else>
            <h1>My Videos</h1>
            <p>
                These are all of my videos on YouTube. They will be embedded
                here
                <i>(the embed may take a second to load)</i>.
            </p>
            <EmbeddedVideo
                v-for="video in videos"
                :key="video.videoId"
                :videoId="video.videoId"
            />
        </div>
    </MainLayout>
</template>

<script lang="ts" setup>
import EmbeddedVideo from "~/components/EmbeddedVideo.vue";
import MainLayout from "~/layouts/MainLayout.vue";

const channelId = "UCKTAOjvi768AX-ccy1iPVKA"; // Yoshiboi18303
const req = await useFetch(
    `https://iv.ggtyler.dev/api/v1/channels/${channelId}/videos`
);
const data = req.data.value as any;
let videos: Ref<any[]> = ref([]);
let error: Ref<any> = ref(null);

if (req.status.value === "error") {
    error = ref(req.error.value);
} else if (req.status.value === "success") {
    videos = ref(
        data.videos.filter(
            (video: any) => !video.title.toLowerCase().includes("[vod]")
        )
    );
}
</script>

<style scoped>
p {
    padding-bottom: 1.75rem;
}
</style>
