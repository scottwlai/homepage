import React from "react";
import Wrapper from "./common/Wrapper";
import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme
} from "@mui/material";
import {
  HashLink
} from "react-router-hash-link";

const Home = () => {
  const theme = useTheme();
  const height = {
    xs: "100%",
    sm: "75vh"
  };

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
        height: height
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "auto 1fr"
        },
        gap: theme.typography.h1.fontSize,
        alignItems: "center"
      }}>
        <Paper elevation={3} sx={{
          display: "flex",
          borderRadius: "5%"
        }}>
          <img
            src="https://www.cs.utexas.edu/~scottlai/images/scottlai.png"
            alt="Scott Lai"
            width={300}
            style={{
              borderRadius: "5%"
            }}
          />
        </Paper>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "start"
          }
        }}>
          <Typography variant="body2" paragraph>
            I&apos;m a senior studying <b>Computer Science</b> and <b>Business</b> at the <b>University of Texas at Austin</b>.
          </Typography>
        </Box>
      </Wrapper>
      <Wrapper boxSx={{
        background: theme.palette.background.paper,
        height: height
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr auto"
        },
        gridTemplateAreas: {
          xs: `
            "img"\n
            "txt"
          `,
          sm: `
            "txt img"
          `
        },
        gap: theme.typography.h1.fontSize,
        alignItems: "center"
      }}>
        <Paper elevation={3} sx={{
          display: "flex",
          borderRadius: "5%"
        }}>
          <img
            src="https://www.cs.utexas.edu/~scottlai/images/swe.jpg"
            alt="CI/CD pipeline"
            width={300}
            style={{
              borderRadius: "5%",
              gridArea: "img"
            }}
          />
        </Paper>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "end"
          },
          gridArea: "txt",
          alignItems: {
            xs: "center",
            sm: "end"
          }
        }}>
          <Typography variant="body2" paragraph>
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
        height: height
      }} containerSx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "auto 1fr"
        },
        gap: theme.typography.h1.fontSize
      }}>
        <Paper elevation={3} sx={{
          display: "flex",
          borderRadius: "5%"
        }}>
          <img
            src="https://www.cs.utexas.edu/~scottlai/images/piano.jpg"
            alt="piano keys"
            width={300}
            style={{
              borderRadius: "5%"
            }}
          />
        </Paper>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "start"
          },
          alignItems: {
            xs: "center",
            sm: "start"
          }
        }}>
          <Typography variant="body2" paragraph>
            I&apos;m a native <b>Houstonian</b> and am currently based in <b>Austin</b>.
          </Typography>
          <Typography variant="body2" paragraph>
            Outside of school, I enjoy kickboxing, video editing, and playing piano.
          </Typography>
          <HashLink
            tabIndex={-1}
            smooth
            to={"/hobbies/#"}
          >
            <Button
              variant="contained"
              size="large"
            >
              My Hobbies
            </Button>
          </HashLink>
        </Box>
      </Wrapper>
    </main>
  );
}

export default Home;
