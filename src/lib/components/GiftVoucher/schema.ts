import { z } from 'zod';
import { m } from '$lib/paraglide/messages';

export const giftVoucherSchema = z.object({
  name: z
    .string({
      errorMap: () => ({
        message: m['giftVoucher.name.errorMessage'](),
      }),
    })
    .min(2)
    .max(50),
  email: z
    .string({
      errorMap: () => ({
        message: m['giftVoucher.email.errorMessage'](),
      }),
    })
    .email(),
  room: z.enum(['prison', 'winery', 'cat'], {
    errorMap: () => ({
      message: m['giftVoucher.room.errorMessage'](),
    }),
  }),
  discounted: z.enum(['discounted', 'not discounted'], {
    errorMap: () => ({
      message: m['giftVoucher.discounted.errorMessage'](),
    }),
  }),
  variant: z.enum(['electronic', 'paper'], {
    errorMap: () => ({
      message: m['giftVoucher.variant.errorMessage'](),
    }),
  }),
  payment: z.enum(['cash', 'stripe', 'bankTransfer'], {
    errorMap: () => ({
      message: m['giftVoucher.payment.errorMessage'](),
    }),
  }),
  note: z.string().max(600).optional(),
  personalInfoProcessing: z.literal(true, {
    errorMap: () => ({
      message: 'Prosím souhlaste se zpracováním osobních údajů',
    }),
  }),
});

export type GiftVoucherSchema = typeof giftVoucherSchema;
