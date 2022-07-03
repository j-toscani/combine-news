<template>
  <div>
    <div class="tabs-container">
      <h2>Reddit posts</h2>
      <h2>Tweets</h2>
    </div>
    <section>
      <ul>
        <slot name="reddit"></slot>
      </ul>

      <ul>
        <slot name="twitter"></slot>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.tabs-container,
section {
  @apply flex gap-4;
}

h2,
ul {
  @apply w-1/2;
}

h2 {
  @apply mb-6;
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
