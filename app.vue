<template>
  <div>
    <h1>
      Hello World!
    </h1>
    <pre>
      {{data}}
    </pre>
  </div>
</template>

<script lang="ts">

export default defineNuxtComponent({
  async setup() {
    const {data} = await useAsyncData('news', () => $fetch("/api/news"))
    return {data};
  }
})
</script>