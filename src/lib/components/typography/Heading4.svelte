<script lang="ts">
  import { cn } from '$lib/utils';
  const { className = '', children, style = '' } = $props();
</script>

<h4
  class={cn(
    'scroll-m-20 text-xl font-semibold tracking-tight',
    className,
  )}
  {style}
>
  {@render children()}
</h4>
