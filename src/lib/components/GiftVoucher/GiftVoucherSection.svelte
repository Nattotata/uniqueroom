<script lang="ts">
  import { Heading2, Paragraph } from '$typography';
  import { m } from '$lib/paraglide/messages';
  import { Button } from '$shadcn/button';
  import { pages } from '$lib/components/navLinks';
</script>

<div class="mx-4 flex flex-col">
  <Heading2>
    {m['giftVoucherSection.heading']()}
  </Heading2>
  <Paragraph>
    {m['giftVoucherSection.text']()}
  </Paragraph>
  <Button class=" mr-8 self-end">
    <a href={pages.giftVoucher.src}>
      {pages.giftVoucher.alt}
    </a>
  </Button>
</div>
