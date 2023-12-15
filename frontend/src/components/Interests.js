import React from "react";
import Wrapper from "./Wrapper";
import {
  Typography
} from "@mui/material";
import Section from "./common/Section";

const Interests = () => {
  return (
    <main>
      <Section>
        <Wrapper>
          <Typography
            variant="h1"
            align="center"
            sx={{
              my: "6rem"
            }}
          >
            Interests
          </Typography>
          <Typography>I have none lol</Typography>
        </Wrapper>
      </Section>
    </main>
  );
}

export default Interests;
