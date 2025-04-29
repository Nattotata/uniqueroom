<script lang="ts">
  const { items }: { items: any[] } = $props();
</script>

<ul class="my-4 ml-4 list-disc [&>li]:mt-2">
  {#each items as item}
    <li>{@html item}</li>
  {/each}
</ul>
