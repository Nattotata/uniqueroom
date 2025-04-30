<script lang="ts">
  import Card from './Card.svelte';
  import {
    BriefcaseBusiness,
    Gift,
    Heart,
    UsersRound,
  } from 'lucide-svelte';
  import { Paragraph } from '$typography';
  import * as m from '$lib/paraglide/messages';
  const data = [
    {
      Icon: UsersRound,
      title: m.cardFriendsTitle(),
      footerText: m.cardFriendsFooter(),
      content: m.cardFriendsParagraph(),
    },
    {
      Icon: Heart,
      title: m.cardFamilyTitle(),
      content: m.cardFamilyContent(),
    },
    {
      Icon: BriefcaseBusiness,
      title: m.cardTeambuildingTitle(),
      content: m.cardTeambuildingContent(),
    },
    {
      Icon: Gift,
      title: m.cardGiftTitle(),
      content: m.cardGiftContent(),
    },
  ];
</script>

<div class="flex flex-row">
  {#each data as { Icon, title, footerText, content }}
    <Card {Icon} {title} {footerText}>
      <Paragraph>
        {content}
      </Paragraph>
    </Card>
  {/each}
</div>
