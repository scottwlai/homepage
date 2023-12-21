import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Box,
  Button,
  Typography,
  useTheme
} from "@mui/material";
import {
  HashLink
} from "react-router-hash-link";

const Home = () => {
  const theme = useTheme();
  return (
    <main>
      <Wrapper>
        <Typography
          paragraph
          variant="h1"
          align="center"
          sx={{
            my: "6rem"
          }}
        >
          Hi, I&apos;m Scott.
        </Typography>
      </Wrapper>
      <Wrapper boxSx={{
        height: "75vh"
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "auto 1fr"
        },
        gap: theme.typography.h1.fontSize
      }}>
        <img
          src="https://www.cs.utexas.edu/~scottlai/images/scottlai.png"
          width={300}
          style={{
            borderRadius: "5%"
          }}
        />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "start"
          }
        }}>
          <Typography variant="h2" paragraph>
            I&apos;m a senior studying <b>Computer Science</b> and <b>Business</b> at the <b>University of Texas at Austin</b>.
          </Typography>
        </Box>
      </Wrapper>
      <Wrapper boxSx={{
        background: theme.palette.background.paper,
        height: "75vh"
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "auto 1fr"
        },
        gap: theme.typography.h1.fontSize
      }}>
        <img
          src="https://www.cs.utexas.edu/~scottlai/images/swe.jpg"
          width={300}
          style={{
            borderRadius: "5%"
          }}
        />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "start"
          }
        }}>
          <Typography variant="h2" paragraph>
            I&apos;m currently concentrating my studies in <b>Software Engineering</b> and have a growing interest in <b>Web Development</b>.
          </Typography>
          <HashLink
            tabIndex={-1}
            smooth
            to={"/portfolio#"}
          >
            <Button
              variant="contained"
              size="large"
            >
              My Portfolio
            </Button>
          </HashLink>
        </Box>
      </Wrapper>
      <Wrapper boxSx={{
        height: "75vh"
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "auto 1fr"
        },
        gap: theme.typography.h1.fontSize
      }}>
        <img
          src="https://www.cs.utexas.edu/~scottlai/images/piano.jpg"
          width={300}
          style={{
            borderRadius: "5%"
          }}
        />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "start"
          }
        }}>
          <Typography variant="h2" paragraph>
            I&apos;m a native <b>Houstonian</b> and am currently based in <b>Austin</b>.
          </Typography>
          <Typography variant="h2" paragraph>
            Outside of school, I enjoy kickboxing, video editing, and playing piano.
          </Typography>
          <HashLink
            tabIndex={-1}
            smooth
            to={"/interests#"}
          >
            <Button
              variant="contained"
              size="large"
            >
              My Interests
            </Button>
          </HashLink>
        </Box>
      </Wrapper>
    </main>
  );
}

export default Home;
