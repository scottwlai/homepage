import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Typography
} from "@mui/material";

const Hobbies = () => {
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
          Hobbies
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography>I kickbox.</Typography>
      </Wrapper>
      <Wrapper>
        <Typography>I edit videos.</Typography>
      </Wrapper>
      <Wrapper>
        <Typography>I play piano.</Typography>
      </Wrapper>
    </main>
  );
}

export default Hobbies;
