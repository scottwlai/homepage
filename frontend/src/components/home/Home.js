import React from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import Section from "./Section";
import SectionImage from "./SectionImage";
import SectionText from "./SectionText";
import CallToActionButton from "./CallToActionButton";
import {
  Typography
} from "@mui/material";

const Home = () => {
  return (
    <main>
      <Wrapper>
        <Title>
          Hi, I&apos;m Scott.
        </Title>
      </Wrapper>
      <Section>
        <SectionImage
          src="https://www.cs.utexas.edu/~scottlai/images/scottlai.png"
          alt="Scott Lai"
          width={300}
          sx={{
            display: "flex",
            borderRadius: "5%",
            gridArea: "img"
          }}
        />
        <SectionText>
          <Typography variant="body2" paragraph>
            I&apos;m a senior studying <b>Computer Science</b> and <b>Business</b> at the <b>University of Texas at Austin</b>.
          </Typography>
        </SectionText>
      </Section>
      <Section alignRight>
        <SectionImage
          src="https://www.cs.utexas.edu/~scottlai/images/swe.jpg"
          alt="CI/CD pipeline"
          width={300}
          sx={{
            display: "flex",
            borderRadius: "5%",
            gridArea: "img"
          }}
        />
        <SectionText alignRight>
          <Typography variant="body2" paragraph>
            I&apos;m currently concentrating my studies in <b>Software Engineering</b> and have a growing interest in <b>Web Development</b>.
          </Typography>
          <CallToActionButton link="/portfolio#">
            My Portfolio
          </CallToActionButton>
        </SectionText>
      </Section>
      <Section>
        <SectionImage
          src="https://www.cs.utexas.edu/~scottlai/images/piano.jpg"
          alt="piano keys"
          width={300}
          sx={{
            display: "flex",
            borderRadius: "5%",
            gridArea: "img"
          }}
        />
        <SectionText>
          <Typography variant="body2" paragraph>
            I&apos;m a native <b>Houstonian</b> and am currently based in <b>Austin</b>.
          </Typography>
          <Typography variant="body2" paragraph>
            Outside of school, I enjoy kickboxing, video editing, and playing piano.
          </Typography>
          <CallToActionButton link="/hobbies/#">
            My Hobbies
          </CallToActionButton>
        </SectionText>
      </Section>
    </main>
  );
}

export default Home;
