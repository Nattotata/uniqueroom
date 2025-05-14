<script lang="ts">
  const { children } = $props();
</script>

<p
  class="text-primaryText max-w-[75ch] leading-7 [&:not(:first-child)]:mt-1"
>
  {#if children}
    {@render children()}
  {/if}
</p>
