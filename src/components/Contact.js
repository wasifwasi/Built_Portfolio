// src/components/Contact.js
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  resize: none;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}
