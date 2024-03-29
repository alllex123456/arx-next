import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Section from '@/components/common/Section';
import Light from '@/components/common/Light';
import Hero from '@/components/Hero/Hero';
import Button from '@/components/common/Button';

const Contact = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (form) => {
    const response = await fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSuccess('Your message has been successfully received!');
    } else {
      setError('There was a problem while sending your message.');
    }
  };

  const inputStyle =
    'py-4 px-2 rounded text-[1.6rem] text-[--gray-60] bg-transparent border-2 border-[--blue-80]';

  return (
    <main>
      <Head>
        <title>ARX Logicwave | Web Development | Contact</title>
      </Head>

      <Light />

      <div className="relative z-10">
        <Hero
          heading={{
            label: 'SERVICES',
            title: 'Contact',
            subtitle:
              'You can use our contact form to reach us by e-mail Monday to Friday 8 AM to 17 PM Bucharest time.',
          }}
        />
      </div>

      <Section className="">
        <div className="flex relative gap-10 justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative max-w-[80rem] z-10 flex flex-col gap-[5rem] flex-1 ||| md:gap-[2rem]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your name</label>
              <input
                {...register('name', { required: true })}
                className={inputStyle}
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">E-mail</label>
              <input
                {...register('email', { required: true })}
                className={inputStyle}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your message</label>
              <textarea
                {...register('message')}
                className={inputStyle}
                rows="10"
              />
            </div>

            <div className="flex gap-6 items-center justify-start">
              <Button
                label={`${isSubmitting ? 'loading' : 'Send'}`}
                className="w-[20rem] cursor-pointer text-center py-4 px-10 rounded uppercase font-bold bg-[--blue-20] transition duration-200 hover:bg-[--blue-10]"
              />
              <span className={`${success ? '' : 'font-bold text-red-500'}`}>
                {success ? success : error}
              </span>
            </div>
          </form>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
