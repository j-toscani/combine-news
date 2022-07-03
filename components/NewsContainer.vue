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

h2, ul {
    @apply w-1/2;
}

ul {
    @apply flex flex-col;
}

ul:deep(li) {
    @apply border-b;
}

h2 {
    @apply pl-4;
    @apply text-2xl;
}
</style>
