<script lang="ts">
  import {
    getLocale,
    locales,
    localizeHref,
  } from '$lib/paraglide/runtime';
  import { page } from '$app/state';
  import LanguageSwitchDropdown from './LanguageSwitchDropdown.svelte';
  const flags = {
    en: '🇬🇧',
    cs: '🇨🇿',
  };
  const path = $derived(page.url.pathname);

  const languageLongNames = {
    en: 'English',
    cs: 'čeština',
  };
  const languageSwitcherData = locales.map((tag) => {
    return {
      tag,
      flag: flags[tag],
      href: localizeHref(path),
      alt: languageLongNames[tag],
    };
  });
</script>

<LanguageSwitchDropdown input={languageSwitcherData}>
  {flags[getLocale()]}
</LanguageSwitchDropdown>
