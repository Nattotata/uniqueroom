<script lang="ts">
  const { children } = $props();
</script>

<h1
  class="scroll-m-20 text-center text-4xl font-bold tracking-tight text-white"
>
  {@render children()}
</h1>
