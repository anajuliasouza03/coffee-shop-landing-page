import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Informe seu nome"),
  email: z.string().email("Email Invalido"),
  phone: z.number().optional(),
  message: z.string().min(1, "Digite uma mensagem"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
