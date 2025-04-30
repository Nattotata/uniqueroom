<script lang="ts">
  import { cn } from '$lib/utils';
  const { children, className = '' } = $props();
</script>

<h3
  class={cn(
    className,
    'scroll-m-20 text-2xl font-semibold tracking-tight',
  )}
>
  {@render children()}
</h3>
