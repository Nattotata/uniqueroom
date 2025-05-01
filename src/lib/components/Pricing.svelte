<script lang="ts">
  import { Heading2, Heading3 } from '$typography';
  import Card from './Card.svelte';
  import { m } from '$lib/paraglide/messages';
  import { bigRooms, cat } from '$lib/roomsParameters';
  const roomsPricing = [
    {
      title: m['pricing.normal.title'](),
      players: `${bigRooms.players} ${m['pricing.normal.players']()}`,
      rooms: m['pricing.normal.description'](),
      timeLimit: `${bigRooms.duration} ${m['pricing.normal.timeLimit']()}`,
      price: `${bigRooms.price} Kč`,
      priceDetail: m['pricing.normal.priceDetail'](),
    },
    {
      title: m['pricing.discounted.title'](),
      players: `${bigRooms.players} ${m['pricing.discounted.players']()}`,
      rooms: m['pricing.discounted.description'](),
      condition: m['pricing.discounted.condition'](),
      timeLimit: `${bigRooms.duration} ${m['pricing.discounted.timeLimit']()}`,
      price: `${bigRooms.price} Kč`,
      priceDetail: m['pricing.discounted.priceDetail'](),
    },
    {
      title: m['pricing.cat.title'](),
      players: `${cat.people} ${m['pricing.cat.players']()}`,
      rooms: m['pricing.cat.description'](),
      timeLimit: `${cat.duration} ${m['pricing.cat.timeLimit']()}`,
      price: `${cat.price} Kč`,
      priceDetail: m['pricing.cat.priceDetail'](),
    },
  ];
</script>

<div class="mx-4">
  <Heading2>{m['pricing.title']()}</Heading2>
  <div class="flex flex-row">
    {#each roomsPricing as room}
      <Card
        cardCss="border-2 justify-between flex flex-col"
        title={room.title}
        titleDescription={room.players}
        buttonText={m['pricing.buttonText']()}
      >
        <div>
          {room.rooms}<br />
          <hr />
          {#if room.condition}
            {@html room.condition}
            <br />
            <hr />
          {/if}
          {room.timeLimit}<br />
          <hr />
          {room.price}
        </div>
      </Card>
    {/each}
  </div>
</div>
