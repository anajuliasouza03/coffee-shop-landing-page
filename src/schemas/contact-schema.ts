import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Informe seu nome"),
  email: z.string().email("Email Invalido"),
  phone: z
    .string()
    .regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Formato de telefone inválido"),
  message: z.string().min(1, "Digite uma mensagem"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
