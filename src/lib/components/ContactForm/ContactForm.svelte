<script lang="ts">
  import * as Form from '$shadcn/form/';
  import { Input } from '$shadcn/input';
  import { m } from '$lib/paraglide/messages';

  import {
    contactFormSchema,
    type ContactFormSchema,
  } from './schema';
  import SuperDebug, {
    type SuperValidated,
    type Infer,
    superForm,
  } from 'sveltekit-superforms';

  import { zodClient } from 'sveltekit-superforms/adapters';
  import { browser, dev } from '$app/environment';
  import { toast } from 'svelte-sonner';
  import { Heading2, Paragraph } from '$typography';

  let {
    contactFormInput,
  }: { contactFormInput: SuperValidated<Infer<ContactFormSchema>> } =
    $props();

  const contactForm = superForm(contactFormInput, {
    validators: zodClient(contactFormSchema),
  });
  const { form: contactFormData, enhance, message } = contactForm;
</script>

<div class="mx-4 mt-4">
  <Heading2>{m['contactForm.heading']()}</Heading2>
  <Paragraph>{m['contactForm.subheading']()}</Paragraph>
</div>
<form method="POST" use:enhance class="m-8 w-[400px]">
  <Form.Field form={contactForm} name="name">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['contactForm.name.label']()}</Form.Label>
        <Input
          {...props}
          bind:value={$contactFormData.name}
          placeholder={m['contactForm.name.placeholder']()}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field form={contactForm} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['contactForm.email.label']()}</Form.Label>
        <Input
          {...props}
          bind:value={$contactFormData.email}
          placeholder={m['contactForm.email.placeholder']()}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field form={contactForm} name="message">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['contactForm.message.label']()}</Form.Label>
        <Input
          {...props}
          bind:value={$contactFormData.message}
          placeholder={m['contactForm.message.placeholder']()}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
</form>

{#if dev && browser}
  <div class="mx-16">
    <SuperDebug data={contactFormData} />
  </div>
{/if}
