<template>
  <header>
    <small class="uppercase"> Get the newest posts and tweets on: </small>
    <a href="https://playstormgate.com/">
      <img src="/images/stormgate_logo_color.png" height="142" widht="512" />
    </a>
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

<style>
html {
  @apply bg-sg-400;
}
</style>

<style scoped>
main {
  @apply flex gap-1;
  @apply bg-sg-100;
  @apply text-white;
  @apply p-4 md:p-8;
}

header {
  @apply flex flex-col;
  @apply items-center justify-center;
  @apply shadow-md;
}

img {
  margin-top: -1rem;
  @apply h-36;
  @apply object-contain;
}

header {
  @apply p-8;
  @apply bg-sg-300;
  @apply text-white;
  @apply flex;
  @apply mb-12;
  @apply text-center;
}
</style>
