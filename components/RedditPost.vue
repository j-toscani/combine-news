<template>
  <li :class="post.stickied ? 'stickied' : ''">
    <a :href="post.url">
      <h3>{{ post.title }}</h3>
      <p>{{ slicedText }}</p>
    </a>
  </li>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface RedditPost {
  selftext: string;
  stickied: boolean;
  title: string;
  url: string;
}

const props = defineProps({
  post: {
    type: Object as () => RedditPost,
  },
});

const slicedText = computed(() =>
  props.post.selftext.length > 140
    ? props.post.selftext.slice(0, 140) + "..."
    : props.post.selftext
);
</script>

<style scoped>
p {
  @apply break-words;
}

h3 {
  @apply mb-2;
  @apply font-bold;
}

p {
  @apply text-sm;
}

li {
  @apply p-4;
}
</style>
