<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Heading2, Paragraph } from '$typography';
  import { phone } from '$lib/contacts.js';
  import { parameters } from '$lib/roomsParameters';
  import cellImage from '$assets/img/prison_hat.jpg';
  import wineryImage from '$assets/img/vinarstvi.webp';
  import catImage from '$assets/img/kocka.webp';
  import Card from '$lib/components/Card.svelte';
  const roomsData = [
    {
      title: m.roomsPrisonTitle(),
      parameters: m.roomsPrisonParameters({
        duration: parameters.prison.duration,
        people: parameters.prison.people,
      }),
      image: cellImage,
      description: m.roomsPrisonDescription(),
    },
    {
      title: m.roomsWineryTitle(),
      parameters: m.roomsWineryParameters({
        duration: parameters.winery.duration,
        people: parameters.winery.people,
      }),
      image: wineryImage,
      description: m.roomsWineryDescription(),
    },

    {
      title: m.roomsCatTitle(),
      parameters: m.roomsCatParameters({
        duration: parameters.cat.duration,
        people: parameters.cat.people,
      }),
      image: catImage,
      description: m.roomsCatDescription(),
    },
  ];
</script>

<div class="mx-4">
  <Heading2>{m.roomsTitle()}</Heading2>
  <Paragraph
    >{m.roomsText()} <a href={`tel:${phone}`}>{phone}</a></Paragraph
  >
  <div class="flex flex-row">
    {#each roomsData as room}
      {#snippet imageSnippet()}
        <img src={room.image} alt={room.title} />
      {/snippet}
      <Card
        cardCss="border-2 border-black-600"
        title={room.title}
        {imageSnippet}
        titleDescription={room.parameters}
        buttonText={m.roomsButton()}
      >
        {room.description}
      </Card>
    {/each}
  </div>
</div>
