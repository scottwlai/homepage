import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Typography
} from "@mui/material";

const Home = () => {
  return (
    <main>
      <Wrapper>
        <Typography
          variant="h1"
          align="center"
          sx={{
            my: "6rem"
          }}
        >
          Hi, I&apos;m Scott.
        </Typography>
        <Typography>
          I&apos;m a senior studying Computer Science and Business at UT Austin.
        </Typography>
        <Typography>
          I&apos;m currently concentrating my studies in Software Engineering and have a growing interest in Web Development.
        </Typography>
        <Typography>
          I&apos;m a native Houstonian and am currently based in Austin. Outside of school, I enjoy kickboxing, video editing, and playing piano.
        </Typography>
      </Wrapper>
    </main>
  );
}

export default Home;
