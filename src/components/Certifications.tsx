import React from 'react';
import styled from 'styled-components';

const CertificationsSection = styled.section`
  padding: 3.125rem; /* 50px to 3.125rem */
  background: ${({ theme }) => theme.body};
`;

const CertificationCard = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1.25rem; /* 20px to 1.25rem */
  border-radius: 0.5rem; /* 8px to 0.5rem */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 0 4px 8px to 0 0.25rem 0.5rem */
  margin-bottom: 1.25rem; /* 20px to 1.25rem */
`;

interface Certification {
  title: string;
  organization: string;
  date: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: 'Certified JavaScript Developer',
      organization: 'XYZ Institute',
      date: 'June 2023',
    },
    {
      title: 'React Professional Certification',
      organization: 'ABC Academy',
      date: 'March 2024',
    },
  ];

  return (
    <CertificationsSection id="certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <CertificationCard key={index}>
          <h3>{cert.title}</h3>
          <p>{cert.organization}</p>
          <p>{cert.date}</p>
        </CertificationCard>
      ))}
    </CertificationsSection>
  );
}
