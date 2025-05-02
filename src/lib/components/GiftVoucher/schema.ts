import { z } from 'zod';

export const giftVoucherSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  room: z.enum(['prison', 'winery', 'cat']),
  discounted: z.enum(['discounted', 'not discounted']),
  variant: z.enum(['electronic', 'paper']),
  payment: z.enum(['cash', 'stripe', 'bankTransfer']),
  note: z.string().max(600).optional(),
  personalInfoProcessing: z.boolean(),
});

export type GiftVoucherSchema = typeof giftVoucherSchema;
