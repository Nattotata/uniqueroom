<script lang="ts">
  import { Heading2, Paragraph } from "$typography"
  import { m } from "$lib/paraglide/messages"
  import { Button } from "$shadcn/button"
  import {pages} from "$lib/components/navLinks"
</script>

<div class="flex flex-col mx-4">
  <Heading2>
    {m['giftVoucherSection.heading']()}
  </Heading2>
  <Paragraph>
    {m['giftVoucherSection.text']()}
  </Paragraph>
  <Button class=" self-end mr-8">
    <a href={pages.giftVoucher.src}>
      {pages.giftVoucher.alt}
    </a>
  </Button>
</div>
