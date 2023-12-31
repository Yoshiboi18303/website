<template>
    <div>
        <div v-if="req.status.value === 'error'">
            <h2>Failed to load video...</h2>
        </div>
        <div v-else-if="!req.data">
            <h2>Loading... <i>(or no data was returned)</i></h2>
        </div>
        <div class="video" v-else>
            <h2 class="title">{{ data.title }}</h2>
            <iframe
                class="embed"
                width="560"
                height="315"
                :src="embedSrc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    videoId: {
        type: String,
        required: true,
    },
});

const videoId = props.videoId;

// eslint-disable-next-line no-undef
const req = await useFetch(`https://iv.ggtyler.dev/api/v1/videos/${videoId}`); // US Invidious instance, may change some stuff later, who knows.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = req.data.value as any; // This may have a different type other than `any` sometime in the future.
const embedSrc = `https://youtube.com/embed/${props.videoId}`;
</script>

<style scoped>
.video {
    padding-bottom: 1rem;
    padding-top: 1rem;
    background-color: gray;
    border: 3px solid rgb(59, 59, 59);
    border-radius: 5px;
    margin: 1rem;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.embed {
    border: 3px solid white;
    border-radius: 5px;
    margin: 1rem;
}
</style>
