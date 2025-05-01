<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
  const imageModules = import.meta.glob(
    '$assets/img/gallery/*_big.jpg',
    {
      eager: true,
      query: {
        enhanced: true,
      },
    },
  );
</script>

<div class="w-full px-4">
  <Heading2>{m['gallery.title']()}</Heading2>
  <Paragraph>{m['gallery.description']()}</Paragraph>
  <div class="columns-1 gap-2 md:columns-2 lg:columns-3">
    {#each Object.entries(imageModules) as [_path, module]}
      <enhanced:img
        src={module.default}
        class="my-2 rounded-sm"
        alt="some alt text"
      />
    {/each}
  </div>
</div>
