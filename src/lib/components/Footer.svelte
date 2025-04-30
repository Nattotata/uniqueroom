<script lang="ts">
  import { navLinks } from './navLinks';
  import { Heading4, Paragraph } from '$typography';
  import * as m from '$lib/paraglide/messages';
  import { phone, email } from '$lib/contacts';
</script>

<hr class="my-8" />

<footer class="mb-8">
  <div class="flex flex-row justify-around">
    <div class="ml-4 flex min-w-[max(300px,25vw)] flex-col gap-1">
      <Heading4>{m.footerNavigationHeading()}</Heading4>
      {#each navLinks as link}
        <a href={link.link}>{link.alt}</a>
      {/each}
    </div>
    <div class="flex flex-col">
      <Heading4>{m.footerContactHeading()}</Heading4>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{phone}</Paragraph>
    </div>
  </div>
  <div class="mt-6 flex flex-col items-center justify-center">
    <Paragraph>{m.footerLegalRequirements()}</Paragraph>
    <Paragraph>
      © {new Date().getFullYear()}
    </Paragraph>
  </div>
</footer>
