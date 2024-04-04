<template>
    <p class="text-white text-2xl font-bold italic px-6" ref="paragraph">
        <span v-for="(word, index) in words" :key="index" class="mouse-md mr-3" ref="word">{{ word }}</span>
    </p>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "AnimatedParagraph",
    props: {
        text: String,
    },
    data() {
        return {
            words: this.text.split("  "),
        };
    },
    mounted() {
        const paragraph = this.$refs.paragraph;
        const words = this.$refs.word;

        gsap.set(paragraph, { opacity: 0 });
        gsap.set(words, { opacity: 0, x: 20 });

        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

        tl.to(paragraph, { opacity: 1 })
            .to(words, { opacity: 1, x: 0, stagger: 0, delay: 0 }, "-=0.8");
    },
};
</script>

<style lang="css">
</style>