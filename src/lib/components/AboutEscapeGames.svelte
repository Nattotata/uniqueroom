<script lang="ts">
  import { Heading2, Heading3, Paragraph } from '$typography';
  import * as m from '$lib/paraglide/messages';
  import peep from '$assets/img/10.webp';
</script>

<div class="flex w-full flex-col">
  <Heading2 className="ml-4">{m.aboutRoomsTitle()}</Heading2>
  <div class="flex w-full flex-row">
    <div class="w-1/2 flex-col p-4">
      <Heading3>{m.aboutRoomsHeading1()}</Heading3>
      <Paragraph>{m.aboutRoomsContent1()}</Paragraph>
      <Heading3 className="mt-4">{m.aboutRoomsHeading2()}</Heading3>
      <Paragraph>{m.aboutRoomsContent2()}</Paragraph>
    </div>
    <img
      class="w-1/2 p-4"
      src={peep}
      alt="A woman looking into a box"
    />
  </div>
</div>
