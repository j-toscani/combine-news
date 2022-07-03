<template>
  <div>
    <div class="tabs-container">
      <h2 @click="showContent('posts')" :class="{ active: showPosts }">
        Reddit
      </h2>
      <h2 @click="showContent('tweets')" :class="{ active: showTweets }">
        Tweets
      </h2>
    </div>
    <section>
      <ul :class="{ 'hide-mobile': showTweets }">
        <slot name="reddit"></slot>
      </ul>

      <ul :class="{ 'hide-mobile': showPosts }">
        <slot name="twitter"></slot>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

type ContentTypes = "tweets" | "posts";

const visibleContent = ref<ContentTypes>("tweets");
const showTweets = computed(() => visibleContent.value === "tweets");
const showPosts = computed(() => visibleContent.value === "posts");

const showContent = (contentType: ContentTypes) => {
  visibleContent.value = contentType;
};
</script>

<style scoped>
.tabs-container,
section {
  @apply flex gap-4;
}

.hide-mobile {
  @apply hidden;
}

h2 {
  @apply w-1/2;
  @apply mb-6;
  @apply cursor-pointer;
  @apply opacity-60;
  @apply transition-colors;
}

.active {
  @apply opacity-100;
}

@screen md {
  .hide-mobile {
    @apply block;
  }
  h2 {
    @apply cursor-default;
    @apply opacity-100;
  }
  ul {
    @apply w-1/2;
  }
}

ul:deep(li) {
  @apply border-b;
  @apply h-fit;
  @apply bg-sg-200;
}

ul:deep(li):not(:last-of-type) {
  @apply mb-4;
}

@screen 2xl {
  ul:deep(li) {
    @apply flex flex-wrap gap-x-4;
    flex-basis: calc(50% -0.5rem);
  }
}

h2 {
  @apply pl-4;
  @apply text-2xl;
}
</style>
