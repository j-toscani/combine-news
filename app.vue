<template>
  <header>
    <div class="container">
      <h1>News on Stormgate!</h1>
    </div>
  </header>
  <main class="container">
    <NewsContainer>
      <template #reddit>
        <RedditPost
          v-for="(post, index) in data.redditPosts"
          :post="post"
          :key="`reddit-${index}`"
        />
      </template>
      <template #twitter>
        <TwitterPost
          v-for="(tweet, index) in data.tweets"
          :tweet="tweet"
          :key="`twitter-${index}`"
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
</style>
