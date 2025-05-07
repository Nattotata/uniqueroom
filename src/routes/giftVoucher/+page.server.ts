import type { PageServerLoad } from './$types.js';
import { fail, message, superValidate } from 'sveltekit-superforms';
import {
  type GiftVoucherSchema,
  giftVoucherSchema,
} from '$lib/components/GiftVoucher/schema.js';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(giftVoucherSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(giftVoucherSchema));
    console.info('Voucher posted!');
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    return message(form, 'Form posted successfully');
  },
};
