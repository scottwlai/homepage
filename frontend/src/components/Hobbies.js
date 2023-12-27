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
        <Typography variant="body2">I kickbox.</Typography>
      </Wrapper>
      <Wrapper>
        <Typography variant="body2">I edit videos.</Typography>
      </Wrapper>
      <Wrapper>
        <Typography variant="body2">I play piano.</Typography>
      </Wrapper>
    </main>
  );
}

export default Hobbies;
