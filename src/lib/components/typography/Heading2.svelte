<script lang="ts">
  const { children, id = '' } = $props();
</script>

<h2
  class="my-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-primaryHeading transition-colors"
  {id}
>
  {@render children()}
</h2>
