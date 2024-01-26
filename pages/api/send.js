import { EmailTemplate } from '@/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.MAIL_SERVER_KEY);

export default async (req, res) => {
  const { name, email, message } = JSON.parse(req.body);
  const { data, error } = await resend.emails.send({
    from: 'ARX Logicwave <contact@contact.alextanase.dev>',
    to: ['alextanase454@gmail.com'],
    subject: 'New message from ARX Logicwave website',
    react: EmailTemplate(name, email, message),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
