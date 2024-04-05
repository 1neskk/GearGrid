<template>
    <h1 ref="header" class="animated-header-glow flex text-white text-4xl font-bold italic px-6">
        <span v-for="(word, index) in words" :key="index" class="span-text mouse-md mr-3" ref="word">{{ word }}</span>
    </h1>
</template>

<script lang="ts">
import { gsap } from 'gsap';

export default {
    name: "AnimatedHeader",
    props: {
        text: String,
    },
    data() {
        return {
            words: this.text.split("  "),
        };
    },
    mounted() {
        const header = this.$refs.header;
        const words = this.$refs.word;

        gsap.set(header, { opacity: 0 });
        gsap.set(words, { opacity: 0, x: 20 });

        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

        tl.to(header, { opacity: 1 })
            .to(words, { opacity: 1, x: 0, stagger: 0, delay: 0 }, "-=0.8");
    },
};
</script>

<style lang="css" scoped>
.header-text {
  font-size: 2.25rem;
  display: flex;
}

.span-text {
    color:#fff;
    /* text-shadow: 0 0 10px #9d00ff, 0 0 15px #9d00ff; */
}

.animated-header-glow {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #8000ff, 0 0 40px #8000ff;
    color: #fff;
}
</style>