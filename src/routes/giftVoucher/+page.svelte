<script lang="ts">
  import * as Form from '$shadcn/form/';
  import { Input } from '$shadcn/input';
  import * as Select from '$shadcn/select';
  import { Checkbox } from '$shadcn/checkbox';

  import { m } from '$lib/paraglide/messages';

  import {
    giftVoucherSchema,
    type GiftVoucherSchema,
  } from '$lib/components/GiftVoucher/schema';

  import SuperDebug, {
    type SuperValidated,
    type Infer,
    superForm,
  } from 'sveltekit-superforms';

  import { zodClient } from 'sveltekit-superforms/adapters';
  import { dev } from '$app/environment';

  let {
    data,
  }: { data: { form: SuperValidated<Infer<GiftVoucherSchema>> } } =
    $props();

  const form = superForm(data.form, {
    validators: zodClient(giftVoucherSchema),
  });

  const { form: formData, enhance, message } = form;

  const roomsOptions = [
    {
      translationKey: m['giftVoucher.room.prison'](),
      value: 'prison',
    },
    {
      translationKey: m['giftVoucher.room.winery'](),
      value: 'winery',
    },
    {
      translationKey: m['giftVoucher.room.cat'](),
      value: 'cat',
    },
  ];
  const discounted = [
    {
      translationKey: m['giftVoucher.discounted.discounted'](),
      value: 'discounted',
    },
    {
      translationKey: m['giftVoucher.discounted.full'](),
      value: 'full',
    },
  ];

  const variants = [
    {
      translationKey: m['giftVoucher.variant.electronic'](),
      value: 'electronic',
    },
    {
      translationKey: m['giftVoucher.variant.paper'](),
      value: 'paper',
    },
  ];

  const payment = [
    {
      translationKey: m['giftVoucher.payment.stripe'](),
      value: 'stripe',
    },
    {
      translationKey: m['giftVoucher.payment.cash'](),
      value: 'cash',
    },
    {
      translationKey: m['giftVoucher.payment.bankTransfer'](),
      value: 'bankTransfer',
    },
  ];
</script>

<form method="POST" use:enhance class="m-8">
  <Form.Field {form} name="name">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.name.label']()}</Form.Label>
        <Input {...props} bind:value={$formData.name} />
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.name.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.email.label']()}</Form.Label>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.email.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="room">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.room.label']()}</Form.Label>
        <Select.Root
          bind:value={$formData.room}
          type="single"
          name={props.name}
        >
          <Select.Trigger {...props} class="w-[180px]">
            {$formData.room
              ? $formData.room
              : m['giftVoucher.room.label']()}
          </Select.Trigger>
          <Select.Content>
            {#each roomsOptions as { translationKey, value }}
              <Select.Item {value} label={translationKey} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.room.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="discounted">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.discounted.label']()}</Form.Label>
        <Select.Root
          type="single"
          name={props.name}
          bind:value={$formData.discounted}
        >
          <Select.Trigger {...props} class="w-[180px]"
          ></Select.Trigger>
          <Select.Content>
            {#each discounted as { translationKey, value }}
              <Select.Item {value}>{translationKey}</Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.discounted.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="variant">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.variant.label']()}</Form.Label>
        <Select.Root
          type="single"
          name={props.name}
          bind:value={$formData.variant}
        >
          <Select.Trigger class="w-[180px]" {...props}
          ></Select.Trigger>
          <Select.Content>
            {#each variants as { translationKey, value }}
              <Select.Item {value} label={translationKey} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.variant.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="payment">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.payment.label']()}</Form.Label>
        <Select.Root
          type="single"
          bind:value={$formData.payment}
          name={props.name}
        >
          <Select.Trigger class="w-[180px]" {...props}
          ></Select.Trigger>
          <Select.Content>
            {#each payment as { translationKey, value }}
              <Select.Item {value} label={translationKey} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>
      {m['giftVoucher.payment.description']()}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="note">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.note.label']()}</Form.Label>
        <Input {...props} bind:value={$formData.note} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="personalInfoProcessing">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>
          {@html m['giftVoucher.personalInfoProcessing.label']()}
        </Form.Label>
        <Checkbox
          {...props}
          bind:checked={$formData.personalInfoProcessing}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button>
    {m['giftVoucher.submitButton']()}
  </Form.Button>
</form>
{#if dev}
  <SuperDebug data={$formData} />
{/if}
{#if $message}
  <div class="message">{$message}</div>
{/if}
