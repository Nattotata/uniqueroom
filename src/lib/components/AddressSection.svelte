<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
  import MapIframe from '$lib/components/MapIframe.svelte';

  import { MapPin, Phone, Mail } from 'lucide-svelte';

  import { phone, email } from '$lib/contacts';

  const data = [
    {
      heading: m['address.map.heading'](),
      Icon: MapPin,
      text: m['address.map.text'](),
    },
    {
      Icon: Phone,
      text: m['address.phone.text']({ phone }),
      heading: m['address.phone.heading'](),
    },
    {
      Icon: Mail,
      text: m['address.mail.text']({ email }),
      heading: m['address.mail.heading'](),
    },
  ];
</script>

<div class="mx-4">
  <Heading2>{m['address.heading']()}</Heading2>
  <Paragraph>{m['address.text']()}</Paragraph>

  <div class="m-4 flex flex-row justify-around">
    <div class="flex flex-col justify-start">
      {#each data as { Icon, text }}
        <div class="m-4 flex flex-row justify-start">
          <Icon class="mr-4 inline" />
          <Paragraph>{text}</Paragraph>
        </div>
      {/each}
    </div>
    <MapIframe />
  </div>
</div>
