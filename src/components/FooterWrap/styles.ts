

import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #1a1a1d;
  color: #ffffff;
  padding: 40px 0;
  min-height: 100vh;
  text-align: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

export const FooterTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #d3fd50;
  }
`;
