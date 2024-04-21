import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './LandingTextStyles';

const LandingText = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Join the Green Movement!
        </SectionTitle>
        <SectionText>
          Did you know on average 35% of household energy is wasted? <br></br><br></br>
        At SustainNext, we believe in empowering individuals to make informed decisions about their energy usage and contribute to a sustainable future. Our platform provides you with the tools and insights you need to optimize your energy consumption, reduce wastage, and lower your environmental footprint.
        <br></br><br></br>
        Learn more about relevant UN Sustainable Development Goals (SGDs) <a href="https://sdgs.un.org/goals">here</a>:<br></br>
        # 11 - Sustainable Cities & Communities<br></br>
        # 12 - Responsible Consumption & Production<br></br>
        # 13 - Climate Action
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default LandingText;
