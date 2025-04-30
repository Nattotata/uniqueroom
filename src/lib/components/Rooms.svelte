<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
  import { phone } from '$lib/contacts.js';
  import { parameters } from '$lib/roomsParameters';
  import cellImage from '$assets/img/7.jpg';
  import Card from '$lib/components/Card.svelte';
  const roomsData = [
    {
      title: m.roomsPrisonTitle(),
      parameters: m.roomsPrisonParameters({
        duration: parameters.prison.duration,
        people: parameters.prison.people,
      }),
      description: m.roomsPrisonDescription(),
    },
  ];
</script>

<Heading2>{m.roomsTitle()}</Heading2>
<Paragraph
  >{m.roomsText()} <a href={`tel:${phone}`}>{phone}</a></Paragraph
>
{m.roomsPrisonTitle()}

{#each roomsData as room}
  <Card
    title={room.title}
    image={cellImage}
    titleDescription={room.parameters}
  >
    {room.description}
  </Card>
{/each}

<img src={cellImage} alt="foo" />
