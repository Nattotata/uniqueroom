<script lang="ts">
  const { children } = $props();
</script>

<p
  class="max-w-[75ch] leading-7 text-primaryText [&:not(:first-child)]:mt-1"
>
  {#if children}
    {@render children()}
  {/if}
</p>
