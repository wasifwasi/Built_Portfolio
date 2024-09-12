import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Import Next.js Image component

const CertificationsSection = styled.section`
  padding: 3.125rem;
  background: ${({ theme }) => theme.body};
`;

const CertificationCard = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1.25rem;
  position: relative;
`;

const ViewButton = styled.button`
  
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 0.75rem;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
  }
`;

const Modal = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;


interface Certification {
  title: string;
  organization: string;
  date: string;
  image: string;
}

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      title: 'Mobile App Development',
      organization: 'e-Rozgaar',
      date: 'Nov 2023',
      image: '/certificates/mobile_app.PNG',  // Image in the public folder
    },
    {
      title: 'DATA ANALYTICS AND BUSINESS INTELLIGENCE',
      organization: 'DigiSkills',
      date: 'Feb 2024',
      image: '/certificates/daabi.png',  // Image in the public folder
    },
    {
      title: 'React Professional Certification',
      organization: 'ABC Academy',
      date: 'March 2024',
      image: '/certificates/ml.png',  // Image in the public folder
    },
    {
      title: 'Certified Ethical Hacker',
      organization: 'Pakistan Freelancing Training Program',
      date: 'Dec 2021',
      image: '/certificates/ethical.png',  // Image in the public folder
    },
  ];

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is on the background (not on the content or children)
    if (e.target === e.currentTarget) {
      handleCloseModal(); // Close the modal when clicking outside the modal content
    }
  };

  return (
    <CertificationsSection id="certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <CertificationCard key={index}>
          <h4>{cert.title}</h4>
          <p>{cert.organization}</p>
          <p>{cert.date}</p>
          <ViewButton onClick={() => setSelectedImage(cert.image)}>
            View Certificate
          </ViewButton>
        </CertificationCard>
      ))}

      <Modal isVisible={!!selectedImage} onClick={handleBackgroundClick}>
        <ModalContent>
          {/* <CloseButton onClick={handleCloseModal}>&times;</CloseButton> */}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Certificate"
              layout="responsive"
              width={800}
              height={600}
            />
          )}
        </ModalContent>
      </Modal>
    </CertificationsSection>
  );
}
