import React from "react";
import Wrapper from "./common/Wrapper";
import Section from "./home/Section";
import SectionText from "./home/SectionText";
import SectionImage from "./home/SectionImage";
import {
  Typography,
  useTheme
} from "@mui/material";
import Title from "./common/Title";

const Hobbies = () => {
  const theme = useTheme();

  return (
    <main>
      <Wrapper>
        <Title>
          Hobbies
        </Title>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I kickbox
        </Typography>
        <SectionImage
          src="https://cs.utexas.edu/~scottlai/images/tsl.jpg"
          alt="Kickboxing Club"
          width={500}
          sx={{
            borderRadius: "5%",
            m: theme.typography.h1.fontSize
          }}
        />
        <Typography variant="body2" paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I practice mixed martial arts every week with the Texas
          Striking Laboratory, a kickboxing club at UT.
        </Typography>
        <Section alignRight>
          <SectionImage
            src="https://cs.utexas.edu/~scottlai/images/sparring.jpg"
            alt="sparring practice"
            width={360}
            sx={{
              display: "flex",
              borderRadius: "5%",
              gridArea: "img"
            }}
          />
          <SectionText alignRight>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              I&apos;ve been learning Muay Thai for over a year now and have
              begun sparring.
            </Typography>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              Aside from self-defense, I&apos;ve learned a great deal of
              discipline, patience, and respect from my practice.
            </Typography>
          </SectionText>
        </Section>
        <Section>
          <SectionImage
            src="https://cs.utexas.edu/~scottlai/images/box.jpg"
            alt="shadowboxing practice"
            width={360}
            sx={{
              display: "flex",
              borderRadius: "5%",
              gridArea: "img"
            }}
          />
          <SectionText>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              This past semester, I became an officer in the club,
              because I wanted to help provide a welcoming
              environment for anyone interested in learning martial
              arts.
            </Typography>
          </SectionText>
        </Section>
        <Typography variant="body2" paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          As an officer, I teach newcomers, organize our
          spreadsheets, and capture our events on camera.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I color grade
        </Typography>
        <Section alignRight>
          <SectionImage
            src="https://cs.utexas.edu/~scottlai/images/james.jpg"
            alt="My friend James sparring Coach Chartouni"
            width={360}
            sx={{
              display: "flex",
              borderRadius: "5%",
              gridArea: "img"
            }}
          />
          <SectionText alignRight>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              I enjoy producing digital media, and I&apos;m happy to use
              my skills in service to the club.
            </Typography>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              I color grade the photos I take in Photoshop and edit my
              videos in Premiere Pro.
            </Typography>
          </SectionText>
        </Section>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I edit videos
        </Typography>
        <Section>
          <iframe
            width="338"
            height="600"
            src="https://youtube.com/embed/sXkTO50NP8o?si=lUC9vJQME0-19wcl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{
              display: "flex",
              gridArea: "img"
            }}
          >
          </iframe>
          <SectionText>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              In a special seminar, we taught a group of taekwondo students how to box.
            </Typography>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              While I&apos;m new to photo editing, I&apos;ve been making
              videos since 2015.
            </Typography>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              Since then, I&apos;ve been expanding my skillset and have
              taken interest in keyframing and animated typography.
            </Typography>
            <Typography variant="body2" paragraph sx={{
              textWrap: "balance"
            }}>
              I like to edit funny clips of me and my friends, and I
              occasionally upload to my YouTube channel.
            </Typography>
          </SectionText>
        </Section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_Q5rz9_2JBE?si=MZqTG_fCV84kZ3BE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I play piano
        </Typography>
        <Typography variant="body2" paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          Besides my edits, I also upload my progress in learning
          piano, though I keep these videos unlisted.
        </Typography>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w4H24nnJ4x8?si=5MTGh9mDWoJM_eU6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{
            margin: theme.typography.h1.fontSize
          }}>
        </iframe>
        <Typography variant="body2" paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I had previously played the violin for 8 years, so I find
          it interesting to see how my experience transfers over to
          piano.
        </Typography>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L9Ue_GJvoVI?si=EkLsxgaTM3p-WifK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{
            margin: theme.typography.h1.fontSize
          }}>
        </iframe>
        <Typography variant="body2" paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          With the basics of music theory and enough practice under
          my belt, I can play any of my favorite songs.
        </Typography>
      </Wrapper>
    </main>
  );
}

export default Hobbies;
