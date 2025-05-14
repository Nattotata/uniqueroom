import { z } from 'zod';
import { m } from '$lib/paraglide/messages';

export const contactFormSchema = z.object({
  name: z.string().max(200),
  email: z.string().email(),
  message: z.string().max(2000),
});

export type ContactFormSchema = typeof contactFormSchema;
