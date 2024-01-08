import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Typography
} from "@mui/material";
import Title from "./common/Title";

const Hobbies = () => {
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
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I practice mixed martial arts every week with the Texas
          Striking Laboratory, a kickboxing club at UT.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I&apos;ve been learning Muay Thai for a year now and have
          begun sparring.
        </Typography>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          Aside from self-defense, I&apos;ve learned a great deal of
          discipline, patience, and respect from my practice.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          This past semester, I became an officer in the club,
          because I wanted to help provide a safe and welcoming
          environment for anyone interested in learning martial
          arts.
        </Typography>
        <Typography paragraph align="center" sx={{
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
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I enjoy producing digital media, and I&apos;m happy to use
          my skills in service to the club.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I color grade the photos I take in Photoshop and edit my
          videos in Premiere Pro.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I edit videos
        </Typography>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          While I&apos;m new to photo editing, I&apos;ve been making
          videos since 2015.
        </Typography>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          Since then, I&apos;ve been expanding my skillset and have
          taken interest in keyframing and animated typography.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I like to edit funny clips of me and my friends, and I
          occasionally upload to my YouTube channel.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography gutterBottom variant="h2">
          I play piano
        </Typography>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          Besides my edits, I also upload my progress in learning
          piano, though I keep these videos unlisted.
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography paragraph align="center" sx={{
          textWrap: "balance",
          maxWidth: "60%"
        }}>
          I had previously played the violin for 8 years, so I find
          it interesting to see how my experience transfers over to
          piano.
        </Typography>
        <Typography paragraph align="center" sx={{
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
