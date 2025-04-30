<script lang="ts">
  import { cn } from '$lib/utils';
  const { children, id = '', className = '' } = $props();
</script>

<h2
  class={cn(
    className,
    'text-primaryHeading my-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors',
  )}
  {id}
>
  {@render children()}
</h2>
