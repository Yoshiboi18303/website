<template>
    <div class="main-logo">
        <img
            src="~/assets/logo.png"
            alt="Logo"
            class="logo"
            aria-label="Yoshiboi18303 Icon"
            :width="props.width"
            :height="props.height"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    width: {
        type: Number,
        default: 80,
    },
    height: {
        type: Number,
        default: 80,
    },
});
</script>

<style>
.logo {
    /*height: 80px;
  width: 80px;*/
    margin: 0.5rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid #000;
}

.logo:hover {
    /* Make logo make a full 360 degree spin */
    transform: rotate(360deg);
    transition: 0.5s;
}
</style>
