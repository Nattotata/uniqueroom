<script lang="ts">
  import { cn } from '$lib/utils';
  const { children, className } = $props();
</script>

<p class={cn(className, 'text-md text-muted-foreground')}>
  {@render children()}
</p>
