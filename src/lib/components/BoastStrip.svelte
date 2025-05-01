<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { Paragraph, Heading3 } from '$typography';

  const data = [
    {
      name: 'years of experience',
      title: '10+',
      text: m['boastStrip.experience'](),
    },
    {
      name: 'groups',
      title: '3000+',
      text: m['boastStrip.groups'](),
    },
    {
      name: 'adventurers',
      title: '10000+',
      text: m['boastStrip.adventurers'](),
    },
    {
      name: 'minutesOfFun',
      title: '160000+',
      text: m['boastStrip.minutesOfFun'](),
    },
  ];
</script>

<div
  class="my-4 flex h-[12rem] w-full flex-row items-center justify-around bg-zinc-600 text-white"
>
  {#each data as block}
    <div class="flex flex-col items-center">
      <Heading3>
        {block.title}
      </Heading3>
      <Paragraph>
        {block.text}
      </Paragraph>
    </div>
  {/each}
</div>
