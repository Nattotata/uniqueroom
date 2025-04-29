<script lang="ts">
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { i18n } from '$lib/i18n';

  import { page } from '$app/state';
  import {
    languageTag,
    setLanguageTag,
  } from '$lib/paraglide/runtime';

  const { input, children } = $props();
  let myOpen = $state(false);

  function getOpen() {
    return myOpen;
  }

  function setOpen(newOpen: boolean) {
    myOpen = newOpen;
  }
  const path = $derived(page.url.pathname);
</script>

<Popover.Root bind:open={getOpen, setOpen}>
  <Popover.Trigger>
    <span class="text-lg">{@render children()}</span>
  </Popover.Trigger>

  <Popover.Content class="w-[100%]">
    {#each input as item, index}
      <div class=" py-1" role="none">
        <a
          href={i18n.route(path)}
          class="text-md block py-2 text-black"
          role="menuitem"
          data-sveltekit-preload-data="hover"
          tabindex="-1"
          hreflang={item.tag}
          aria-current={item.tag === languageTag()
            ? 'page'
            : undefined}
          onclick={() => {
            setLanguageTag(item.tag);
            setOpen(false);
          }}
          id="menu-item-{index}"
        >
          <span class="text-lg">{item.flag} {item.alt}</span></a
        >
      </div>
    {/each}
  </Popover.Content>
</Popover.Root>
