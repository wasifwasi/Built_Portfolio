// src/components/ProfilePicture.js
import styled from 'styled-components';
import Image from 'next/image';

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function ProfilePicture() {
  return (
    <PictureWrapper>
      <ProfileImage
        src="/profile.jpg" // Path to your image in the public folder
        alt="Profile Picture"
        width={200} // Set desired width
        height={200} // Set desired height
        priority
      />
    </PictureWrapper>
  );
}
