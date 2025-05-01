<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
</script>

<div class="mx-4 w-full">
  <Heading2>{m['gallery.title']()}</Heading2>
  <Paragraph>{m['gallery.description']()}</Paragraph>
</div>
