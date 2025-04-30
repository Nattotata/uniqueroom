<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils';
  import { House } from 'lucide-svelte';
  import { Paragraph } from '$typography';

  const {
    title = 'A title',
    titleCss = '',
    titleDescription = '',
    children = null,
    cardCss = '',
    Icon = null,
    Image,
    imageAlt = '',
    content = '',
    buttonText = '',
    buttonLink = '',
    footerText = '',
  } = $props();
</script>

<!--
@component
## Card with an icon

* title?: string
* titleCss?: tailwind classes for the title
* cardCss?: tailwind classes for the card root
* buttonText?: string
* buttonLink?: string
* children?: HTML in the card content
* content?: HTML in the card content
* footerContent?: HTML in the card footer
* Icon?: an icon (for example, passed from lucide-svelte)
* Image?: an image (import the image then pass it to the component)
* imageAlt?: if passing an image, pass an image alt too

-->
<Card.Root
  class={cn(
    'mx-2 my-2 min-h-[350px] w-[350px] rounded-xl border-0 bg-white text-center text-black',
    cardCss,
  )}
>
  <Card.Header class="flex flex-col items-center gap-2">
    {#if Icon}
      <Icon size="100" color="black" />
    {/if}
    {#if Image}
      <img src={Image} alt={imageAlt} />
    {/if}
    <Card.Title
      class={cn('text-2xl font-semibold text-black', titleCss)}
      >{title}
    </Card.Title>
  </Card.Header>
  <Card.Description>
    {titleDescription}
  </Card.Description>
  <Card.Content>
    <span>{@html content}</span>
    {#if children}
      {@render children()}
    {/if}
  </Card.Content>
  <Card.Footer class="justify-center">
    {#if footerText}
      <Paragraph>
        {@html footerText}
      </Paragraph>
    {/if}
    {#if buttonText}
      <Button
        class={cn('px-4 py-2 text-lg font-medium text-white')}
        href={buttonLink}>{buttonText}</Button
      >
    {/if}
  </Card.Footer>
</Card.Root>
