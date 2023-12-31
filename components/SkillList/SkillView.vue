<template>
    <div>
        <a :href="props.link" target="_blank" rel="noopener noreferrer">
            <img
                :src="props.icon"
                :alt="$props.name"
                class="icon"
                :aria-label="props.name"
            />
            <p class="name">
                <strong>{{ props.name }}</strong>
            </p>
        </a>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    icon: {
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
div {
    display: inline-block;
    text-align: center;
    transition: 0.5s;
}

a {
    text-decoration: none;
    color: black;
}

.icon {
    width: 64px;
    height: 64px;
    margin: auto;
}

.name {
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
}

div:hover {
    background-color: white;
    transform: scale(1.1);
    cursor: pointer;
}
</style>
