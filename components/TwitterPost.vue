<template>
  <li>
    <a href="/">
      <p>
        {{ tweet.text }}
      </p>
      <div>
        <span> retweets: {{ tweet.public_metrics.retweet_count }} </span>
        <span> replies: {{ tweet.public_metrics.reply_count }} </span>
        <span> likes: {{ tweet.public_metrics.like_count }} </span>
        <span> quotes: {{ tweet.public_metrics.quote_count }} </span>
      </div>
    </a>
  </li>
</template>

<script lang="ts" setup>
interface Tweet {
  id: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  text: string;
}

defineProps({
  tweet: {
    type: Object as () => Tweet,
    required: true
  },
});
</script>

<style scoped>
p {
  @apply break-words;
  @apply mb-2;
}

li {
  @apply p-4;
}

div {
  @apply flex flex-wrap gap-2;
  @apply text-sm;
}
</style>
