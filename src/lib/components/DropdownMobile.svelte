<script lang="ts">
  import { Menu } from 'lucide-svelte';
  import * as Popover from '$lib/components/ui/popover/index.js';

  const { links }: { links: { alt: string; link: string }[] } =
    $props();
  let myOpen = $state(false);

  function getOpen() {
    return myOpen;
  }

  function setOpen(newOpen: boolean) {
    myOpen = newOpen;
  }
</script>

<Popover.Root bind:open={getOpen, setOpen}>
  <Popover.Trigger>
    <Menu class="md:hidden" size="33" color="#fff" />
  </Popover.Trigger>
  <Popover.Content>
    {#each links as item}
      <div class="py-1" role="none">
        <a
          href={item.link}
          class="text-md block px-4 py-2 text-black"
          role="menuitem"
          data-sveltekit-preload-data="hover"
          tabindex="-1"
          onclick={() => {
            setOpen(false);
          }}
          id="menu-item-0"
        >
          <span>{item.alt}</span></a
        >
      </div>
    {/each}
  </Popover.Content>
</Popover.Root>
