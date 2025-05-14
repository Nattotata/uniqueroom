<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
  import MapIframe from '$lib/components/MapIframe.svelte';
  
    import {MapPin,Phone,Mail} from "lucide-svelte"

    const data = [
        {
            Icon: MapPin,
            text: m['address.map']() || ""
        },
        {
            Icon: Phone,
            text: m['address.phone']()
        },
        {
            Icon: Mail,
            text: m['address.mail']()
        }
    ]
</script>

<Heading2>{m['address.heading']}</Heading2>
<Paragraph>{m['address.text']}</Paragraph>
<div class="flex flex-row justify-center">
<div class="flex flex-col">
<div class="flex flex-row justify-start">
{#each data as {Icon, text}}
<Paragraph><Icon /> {text}</Paragraph>
{/each}
<MapPin /> {m['address.heading']()}

</div>
</div>
<MapIframe />
</div>
