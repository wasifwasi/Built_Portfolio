// src/components/Certifications.js
import styled from 'styled-components';

const CertificationsSection = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.body};
`;

const CertificationCard = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export default function Certifications() {
  const certifications = [
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
