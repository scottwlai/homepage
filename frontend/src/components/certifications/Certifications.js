import React, {
  useEffect,
  useState
} from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import {
  getCertifications
} from "../common/api";
import {
  formatDate
} from "../common/timeUtils";
import {
  Breadcrumbs,
  Dialog,
  DialogContent,
  Unstable_Grid2 as Grid,
  Card,
  CardActions,
  CardActionArea,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ActionButton from "../common/ActionButton";

const cacheKey = "certifications";

// function to make the API call
async function getCertificationsData(setCertifications) {
  try {
    const response = await getCertifications();
    let data = response.data;
    localStorage.setItem(cacheKey, JSON.stringify(data));
    setCertifications(data);
  } catch (error) {
    console.error(error);
  }
}

const Certifications = () => {
  const [ certifications, setCertifications ] = useState([]);
  const [ openCertifications, setOpenCertifications ] = useState([]);

  useEffect(() => {
    // try to find the certifications data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    cachedData ? setCertifications(cachedData) : getCertificationsData(setCertifications);
  }, []);

  const handleClickOpen = (certificationTitle) => {
    setOpenCertifications(prevState => ({ ...prevState, [certificationTitle]: true }));
  };

  const handleClose = (certificationTitle) => {
    setOpenCertifications(prevState => ({ ...prevState, [certificationTitle]: false }));
  };

  return (
    <main>
      <Wrapper>
        <Title>
          Certifications
        </Title>
        <Breadcrumbs separator={<ChevronRightIcon />}>
          <LinkButton link="/portfolio/#" variant="text">
            Portfolio
          </LinkButton>
          <LinkButton link="/portfolio/certifications/#" variant="text">
            Certifications
          </LinkButton>
        </Breadcrumbs>
      </Wrapper>
      <Wrapper sx={{ justifyItems: "normal" }}>
        <Grid container spacing={4}>
          {certifications.map((certification) => (
            <Grid xs={12} sm={6} md={4} key={certification.title}>
              <Card raised sx={{
                height: "100%",
                display: "grid",
                gridTemplateAreas: {
                  xs: `
                    "img"
                    "title"
                    "content"
                    "action"
                  `
                },
                gridTemplateRows: "auto 1fr auto auto"
              }}>
                <Dialog
                  open={openCertifications[certification.title] || false}
                  onClose={() => handleClose(certification.title)}
                  maxWidth="md"
                >
                  <DialogContent sx={{ p: 0 }}>
                    <img
                      src={certification.certificate}
                      alt={certification.title}
                      width="100%"
                    />
                  </DialogContent>
                </Dialog>
                <CardActionArea
                  onClick={() => handleClickOpen(certification.title)}
                  sx={{
                    gridArea: "img"
                  }}
                >
                  <CardMedia
                    component="img"
                    src={certification.certificate}
                    alt={certification.title}
                  />
                </CardActionArea>
                <CardHeader title={certification.title} sx={{
                  gridArea: "title",
                  alignSelf: "start"
                }} />
                <CardContent sx={{
                  gridArea: "content",
                  alignSelf: "end"
                }}>
                  <List sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "column"
                    },
                    flexWrap: "wrap",
                    columnGap: 2,
                    columnCount: {
                      xs: 1,
                      sm: 2,
                      md: 1
                    }
                  }}>
                    <ListItem sx={{
                      width: "auto"
                    }}>
                      <ListItemIcon>
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {certification.issuer}
                      </ListItemText>
                    </ListItem>
                    <ListItem sx={{
                      width: "auto"
                    }}>
                      <ListItemIcon>
                        <CalendarMonthIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {formatDate(certification.date)}
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{
                  gridArea: "action"
                }}>
                  <ActionButton
                    variant="outlined"
                    link={certification.credential}
                    target="_blank"
                  >
                    View Credential
                  </ActionButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </main>
  );
};

export default Certifications;
