import React from "react";
import {
  Footer,
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterText,
  SocialIcons,
  SocialLink,
} from "./styles";

const FooterWrap = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>About Me</FooterTitle>
          <FooterText>
            Passionate developer with a love for creating beautiful and functional web applications.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>Email: example@example.com</FooterText>
          <FooterText>Phone: (123) 456-7890</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Me</FooterTitle>
          <SocialIcons>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </SocialLink>
          </SocialIcons>
        </FooterSection>
      </FooterContainer>
    </Footer>
  );
};

export default FooterWrap;
