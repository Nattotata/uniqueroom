<script lang="ts">
  const { children } = $props();
</script>

<blockquote class="mt-6 border-l-2 pl-6 italic">
  {@render children()}
</blockquote>
