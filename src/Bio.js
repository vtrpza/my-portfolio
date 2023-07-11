// Bio.js
import React from "react";
import styled, { keyframes } from "styled-components";

const BioContainer = styled.div`
  display: flex;
  background-color: var(--black);
  color: var(--aquamarine);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 5px;
  border: 2px solid var(--aquamarine);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-top: none;
  border-bottom: none;
  padding: 20px;
  max-width: 800px;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: var(--aquamarine);
  border: 2px solid var(--aquamarine);
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const ProfilePictureImage = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
`;

const ProfilePicture = ({ src, size = 200, borderRadius = "50%" }) => {
  return (
    <ProfilePictureContainer>
      <ProfilePictureImage src={src} size={size} borderRadius={borderRadius} />
    </ProfilePictureContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BioText = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: justify;
  text-transform: none;
  letter-spacing: 0.5px;
  fontweight: 400;
  color: var(--aquamarine);
  word-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  max-width: 800px;
`;

const Bio = () => {
  return (
    <BioContainer>
      <ProfilePicture src={"img/profile.jpeg"} />
      <BioText>
        Hi, my name is Vitor Pouza. I'm an experienced and driven Frontend
        Engineer with 5 years of expertise in React, TypeScript, and Next.js. I
        thrive on tackling complex challenges and transforming them into
        high-quality solutions. I'm deeply passionate about continuous learning
        and I make it a priority to stay up-to-date with the latest industry
        trends. As the tech landscape continues to evolve at a breakneck pace, I
        find joy in diving into the ever-changing depths of this industry,
        always eager to expand my knowledge and refine my skill set. My ambition
        doesn't stop there. I'm striving to become a specialist in my field,
        dedicated to pushing the boundaries of what is possible and consistently
        raising the bar for frontend development. There's a thrill in
        challenging the status quo, in breaking new ground and contributing to
        the advancement of our industry. Now, I'm ready to bring this drive and
        dedication to your projects. Excellence isn't just an aspiration, it's
        my standard. I'm eager to use my skills and expertise to create
        exceptional products that stand the test of time. Together, we can build
        something truly remarkable. So, please, dive into my portfolio and see
        what I bring to the table. I'm confident that my skills, experience, and
        commitment to quality will prove invaluable to your projects. Let's
        start this journey together!
      </BioText>
    </BioContainer>
  );
};

export default Bio;
