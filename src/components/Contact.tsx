// src/components/Contact.js
import styled from 'styled-components';

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
  color: white;
  padding: 0.625rem 1.25rem; 
  border: none;
  border-radius: 0.5rem; 
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
