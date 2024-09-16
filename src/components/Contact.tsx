import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { z } from 'zod';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = styled.section`
  padding: 3.125rem;
  background: ${({ theme }) => theme.body};
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Input = styled.input`
  padding: 0.625rem;
  width: 100%;
  max-width: 25rem;
  border: 0.0625rem solid ${({ theme }) => theme.text};
  border-radius: 0.25rem;
`;

const TextArea = styled.textarea`
  padding: 0.625rem;
  width: 100%;
  max-width: 25rem;
  border: 0.0625rem solid ${({ theme }) => theme.text};
  border-radius: 0.25rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #068a9bff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05, backgroundColor: "#b8dee4ff" }}
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Zod validation
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {} as Record<string, string>);
      setErrors(errorMessages);
      return;
    }

    // If valid, send email
    emailjs
      .send('service_a2smvdq', 'template_7nmtc5p', formData, '8-h7_VlG3-fN0uo_f')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );

    // Clear the form and errors
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}
