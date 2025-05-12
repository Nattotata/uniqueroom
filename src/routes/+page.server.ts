import type { PageServerLoad } from './$types.js';
import { fail, message, superValidate } from 'sveltekit-superforms';
import {
  type ContactFormSchema,
  contactFormSchema,
} from '$lib/components/ContactForm/schema.js';
import {
    type GiftVoucherSchema,
    giftVoucherSchema
} from "$lib/components/GiftVoucher/schema.js"
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  return {
    contactForm: await superValidate(zod(contactFormSchema)),
    giftVoucherForm: await superValidate(zod(giftVoucherSchema))
  };
};

export const actions: Actions = {
  contact: async (event) => {
    const form = await superValidate(event, zod(contactFormSchema));
    console.info('contact form submitted');
    if (!form.valid) {
      return message(form, 'contact form is not valid');
    }
    return message(form, 'contact form is valid');
  },
    giftVoucher: async (event) => {
    const form = await superValidate(event, zod(giftVoucherSchema));
    console.info('contact form submitted');
    if (!form.valid) {
      return message(form, 'contact form is not valid');
    }
    return message(form, 'contact form is valid');
  },
};
