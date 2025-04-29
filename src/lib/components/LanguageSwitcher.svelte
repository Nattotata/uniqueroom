<script lang="ts">
  import {
    availableLanguageTags,
    languageTag,
  } from '$lib/paraglide/runtime';
  import { i18n } from '$lib/i18n';
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
  const languageSwitcherData = availableLanguageTags.map((tag) => {
    return {
      tag,
      flag: flags[tag],
      href: i18n.route(path),
      alt: languageLongNames[tag],
    };
  });
</script>

<LanguageSwitchDropdown input={languageSwitcherData}>
  {flags[languageTag()]}
</LanguageSwitchDropdown>
