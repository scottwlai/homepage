import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Typography
} from "@mui/material";

const Interests = () => {
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
        <Typography>I have none lol</Typography>
      </Wrapper>
    </main>
  );
}

export default Interests;
