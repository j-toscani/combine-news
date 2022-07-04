<template>
  <header>
    <h1>News on Stormgate!</h1>
  </header>
  <main class="container">
    <NewsContainer>
      <template #reddit>
        <RedditPost
          v-for="(post, index) in data.redditPosts"
          :key="`reddit-${index}`"
          :post="post"
        />
      </template>
      <template #twitter>
        <TwitterPost
          v-for="(tweet, index) in data.tweets"
          :key="`twitter-${index}`"
          :tweet="tweet"
        />
      </template>
    </NewsContainer>
  </main>
</template>

<script lang="ts">
export default defineNuxtComponent({
  async setup() {
    const { data } = await useAsyncData("news", () => $fetch("/api/news"));
    return { data };
  },
});
</script>

<style scoped>
main {
  @apply flex gap-1;
}

header {
  @apply p-8;
  @apply bg-blue-700;
  @apply text-white;
  @apply flex;
  @apply mb-12;
  @apply text-center;
}

h1 {
  @apply text-4xl;
  @apply mx-auto;
}
</style>
