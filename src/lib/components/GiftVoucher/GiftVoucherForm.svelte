
<script lang="ts">
  import * as Form from '$shadcn/form/';
  import { Input } from '$shadcn/input';
  import * as Select from '$shadcn/select';
  import { Checkbox } from '$shadcn/checkbox';

  import imagePrison from '$assets/img/poukaz-web-cela.webp?enhanced';
  import imageWinery from '$assets/img/poukaz-web-vinarstvi.webp?enhanced';
  import imageCat from '$assets/img/poukaz-web-kocka.webp?enhanced';

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
  import { toast } from 'svelte-sonner';
import { Heading2 } from '$typography';

  let {
data,
  }: { data: { form: SuperValidated<Infer<GiftVoucherSchema>> } } =
    $props();

  const form = superForm(data.form, {
    validators: zodClient(giftVoucherSchema),

    onUpdated: ({ form }) => {
      console.info(form.valid);
      if (!form.valid) {
        toast(m['giftVoucher.failToast']());
        return;
      }
      toast(m['giftVoucher.successToast']());
    },
  });

  const { form: formData, enhance, message } = form;

  const images = {
    prison: imagePrison,
    winery: imageWinery,
    cat: imageCat,
  };

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

<div class="mx-4 mt-4">
  <Heading2>{m['giftVoucher.heading']()}</Heading2>
</div>
<div class="flex flex-col justify-center w-full items-center">
<form method="POST" use:enhance class="m-8 w-[400px]">
  <Form.Field {form} name="name" class="space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.name.label']()}</Form.Label>
        <Input
          {...props}
          bind:value={$formData.name}
          placeholder={m['giftVoucher.name.description']()}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="email" class="mt-4 space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.email.label']()}</Form.Label>
        <Input
          {...props}
          bind:value={$formData.email}
          placeholder={m['giftVoucher.email.description']()}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="room" class="mt-4 space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.room.label']()}</Form.Label>
        <Select.Root
          bind:value={$formData.room}
          type="single"
          name={props.name}
        >
          <Select.Trigger {...props} class="w-[400px]">
            {$formData.room
              ? roomsOptions.find(
                  (option) => option.value === $formData.room,
                )?.translationKey
              : m['giftVoucher.room.description']()}
          </Select.Trigger>
          <Select.Content>
            {#each roomsOptions as { translationKey, value }}
              <Select.Item
                onchange={(e) => {
                  console.info(e);
                }}
                {value}
                label={translationKey}
              />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
    {#if $formData.room}
      <enhanced:img
        class="my-2 rounded-md"
        src={images[$formData.room]}
        alt="voucher"
      ></enhanced:img>
    {/if}
  </Form.Field>

  {#if $formData.room === 'prison' || $formData.room === 'winery'}
    <Form.Field {form} name="discounted" class="mt-4 space-y-1">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label
            >{m['giftVoucher.discounted.label']()}</Form.Label
          >
          <Select.Root
            type="single"
            name={props.name}
            bind:value={$formData.discounted}
          >
            <Select.Trigger {...props} class="w-[400px]">
              {$formData.discounted
                ? discounted.find(
                    (option) => option.value === $formData.discounted,
                  )?.translationKey
                : m['giftVoucher.discounted.description']()}
            </Select.Trigger>
            <Select.Content>
              {#each discounted as { translationKey, value }}
                <Select.Item {value}>{translationKey}</Select.Item>
              {/each}
            </Select.Content>
          </Select.Root>
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  {/if}

  <Form.Field {form} name="variant" class="mt-4 space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.variant.label']()}</Form.Label>
        <Select.Root
          type="single"
          name={props.name}
          bind:value={$formData.variant}
        >
          <Select.Trigger class="w-[400px]" {...props}>
            {$formData.variant
              ? variants.find(
                  (option) => option.value === $formData.variant,
                )?.translationKey
              : m['giftVoucher.variant.description']()}
          </Select.Trigger>
          <Select.Content>
            {#each variants as { translationKey, value }}
              <Select.Item {value} label={translationKey} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="payment" class="mt-4 space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.payment.label']()}</Form.Label>
        <Select.Root
          type="single"
          bind:value={$formData.payment}
          name={props.name}
        >
          <Select.Trigger class="w-[400px]" {...props}>
            {$formData.payment
              ? payment.find(
                  (option) => option.value === $formData.payment,
                )?.translationKey
              : m['giftVoucher.payment.description']()}
          </Select.Trigger>
          <Select.Content>
            {#each payment as { translationKey, value }}
              <Select.Item {value} label={translationKey} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="note" class="mt-4 w-[400px] space-y-1">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{m['giftVoucher.note.label']()}</Form.Label>
        <Input {...props} bind:value={$formData.note} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="personalInfoProcessing" class="mt-4">
    <Form.Control>
      {#snippet children({ props })}
        <div class="my-4 flex items-center space-x-2">
          <Checkbox
            {...props}
            bind:checked={$formData.personalInfoProcessing}
          />
          <div>
            <Form.Label>
              {@html m['giftVoucher.personalInfoProcessing.label']()}
            </Form.Label>
          </div>
        </div>
        <Form.Description>
          Více informací o zpracování osobních údajů najdete v
          <a href="/ZOOU.pdf" style="text-decoration: underline;">
            Zásady zpracování a ochrany osobních údajů
          </a>.
        </Form.Description>
        <Form.FieldErrors />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <div class="flex flex-row justify-end">
    <Form.Button>
      {m['giftVoucher.submitButton']()}
    </Form.Button>
  </div>
</form>
{#if dev}
  <div class="mx-2">
    <SuperDebug data={$formData} />
  </div>
{/if}
{#if $message}
  <div class="message">{$message}</div>
{/if}
</div>