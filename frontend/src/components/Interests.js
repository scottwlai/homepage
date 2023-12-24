import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Typography,
  useTheme
} from "@mui/material";

const Interests = () => {
  const theme = useTheme();

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
          Interests
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

export default Interests;
