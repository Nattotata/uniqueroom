<script lang="ts">
  import dirtyArmyBox from '$assets/img/dirtyArmyBox.webp';
  import { Heading1, Heading3 } from '$typography';
  import { m } from '$lib/paraglide/messages';
  const {
    bgImage = dirtyArmyBox,
    title = m.mainTitle(),
    subtitle = m.mainSubtitle(),
  } = $props();
</script>

<!--
@component
## A component with a background image

Introduces the page

### Props

* bgImage: The background image
* title: h1
* subtitle: h3
-->

<div
  class="hero-image"
  style="background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url({bgImage});"
>
  <div
    class="color-white flex h-full flex-col items-start justify-center pl-12"
  >
    <Heading1>{title}</Heading1>
    <Heading3 className="text-white mt-2">{subtitle}</Heading3>
  </div>
</div>

<style>
  /* The hero image */
  .hero-image {
    height: 40rem;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
