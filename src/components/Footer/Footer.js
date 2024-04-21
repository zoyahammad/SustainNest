import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { ContactContainer, FooterContainer, LinkItem, SocialContainer, SocialIconsContainer, SocialIcons } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <ContactContainer>
          <LinkItem href="mailto:hello@sustainnest.com">
            hello@sustainnest.com
          </LinkItem>
          <LinkItem href="sponsor">
            Donate
          </LinkItem>
        </ContactContainer>
        <SocialContainer>
          <SocialIcons href="https://medium.com/@zoya.hammad99">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@zoya.hammad99">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
