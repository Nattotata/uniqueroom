<script lang="ts">
  // import DropdownUniversal from '$lib/components/DropdownUniversal.svelte';
  import DropdownMobile from './DropdownMobile.svelte';
  import { ChevronDown } from 'lucide-svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import * as m from '$lib/paraglide/messages';

  import { navLinks } from './navLinks';
</script>

<nav class="flex justify-between bg-black/50 p-4">
  <!-- Left -->
  <div
    class="text-md flex flex-row content-center items-center gap-4 font-semibold text-white"
  >
    <LanguageSwitcher />
    unIQue room
  </div>
  <!-- Right -->
  <div class="hidden space-x-4 p-2 md:flex">
    {#each navLinks as item}
      <a
        href={item.link}
        class="text-md font-medium text-gray-300 transition-colors hover:text-white"
      >
        <snap>{item.alt.toUpperCase()}</snap>
      </a>
    {/each}
  </div>
  <div class="md:hidden">
    <DropdownMobile links={navLinks} />
  </div>
</nav>

<!--
<div class="fixed top-0 z-10 w-full">
  <div class="w-full overflow-hidden bg-white text-black shadow-md">
    <a
      href="https://www.uniqueroom.cz/en"
      class="w3-bar-item w3-button w3-wide">English</a
    >
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button"
        >CO JE TO ÚNIKOVÁ HRA?</a
      >
      <a href="#rooms" class="w3-bar-item w3-button">
        NAŠE MÍSTNOSTI</a
      >
      <a href="#gallery" class="w3-bar-item w3-button"
        ><i class="fa fa-th"></i> FOTOGALERIE</a
      >
      <a href="#pricing" class="w3-bar-item w3-button">CENA</a>
      <a href="#voucher" class="w3-bar-item w3-button"
        ><i class="fa fa-gift"></i> DÁRKOVÉ POUKAZY</a
      >
      <a href="#contact" class="w3-bar-item w3-button"
        ><i class="fa fa-envelope"></i> KONTAKT</a
      >
    </div>

    <a
      href="javascript:void(0)"
      class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
      onclick="w3_open()"
    >
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<nav
  class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
  style="display:none"
  id="mySidebar"
>
  <a
    href="javascript:void(0)"
    onclick="w3_close()"
    class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a
  >
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button"
    >CO JE TO ÚNIKOVÁ HRA?</a
  >
  <a href="#rooms" onclick="w3_close()" class="w3-bar-item w3-button"
    >NAŠE MÍSTNOSTI</a
  >
  <a
    href="#gallery"
    onclick="w3_close()"
    class="w3-bar-item w3-button">FOTOGALERIE</a
  >
  <a
    href="#pricing"
    onclick="w3_close()"
    class="w3-bar-item w3-button">CENA</a
  >
  <a
    href="#voucher"
    onclick="w3_close()"
    class="w3-bar-item w3-button"
    ><i class="fa fa-gift"></i> DÁRKOVÉ POUKAZY</a
  >
  <a
    href="#contact"
    onclick="w3_close()"
    class="w3-bar-item w3-button">KONTAKT</a
  >
</nav>
-->
