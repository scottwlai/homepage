import React, {
  useEffect,
  useState
} from "react";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";
import LinkButton from "../common/LinkButton";
import {
  getProjects
} from "../common/api";
import {
  formatDate
} from "../common/timeUtils";
import {
  Breadcrumbs,
  Card,
  Stack,
  CardHeader,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  CardActionArea,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ActionButton from "../common/ActionButton";

const cacheKey = "projects";

// function to make the API call
async function getProjectsData(setProjects) {
  try {
    const response = await getProjects();
    let data = response.data;
    localStorage.setItem(cacheKey, JSON.stringify(data));
    setProjects(data);
  } catch (error) {
    console.error(error);
  }
}

const Projects = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [ projects, setProjects ] = useState([]);
  const [ openProjects, setOpenProjects ] = useState([]);

  useEffect(() => {
    // try to find the projects data in the cache
    let cachedData = JSON.parse(localStorage.getItem(cacheKey));
    cachedData ? setProjects(cachedData) : getProjectsData(setProjects);
  }, []);

  const handleClickOpen = (projectName) => {
    setOpenProjects(prevState => ({ ...prevState, [projectName]: true }));
  };

  const handleClose = (projectName) => {
    setOpenProjects(prevState => ({ ...prevState, [projectName]: false }));
  };

  return (
    <main>
      <Wrapper>
        <Title>
          Projects
        </Title>
        <Breadcrumbs separator={<ChevronRightIcon />}>
          <LinkButton link="/portfolio/#" variant="text">
            Portfolio
          </LinkButton>
          <LinkButton link="/portfolio/projects/#" variant="text">
            Projects
          </LinkButton>
        </Breadcrumbs>
      </Wrapper>
      <Wrapper sx={{ justifyItems: "normal" }}>
        <Stack spacing="2rem">
          {projects.map((project) => (
            <Card key={project.name} sx={{
              display: "grid",
              gridTemplateAreas: {
                xs: `
                  "img"\n
                  "head"\n
                  "body1"\n
                  "body2"\n
                  "action"
                `,
                sm: `
                  "img head"\n
                  "img body1"\n
                  "body2 body2"\n
                  "action action"
                `,
                md: `
                  "img head"\n
                  "img body1"\n
                  "body2 body2"\n
                  "action action"
                `
              },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "2fr 3fr",
                md: "2fr 5fr"
              },
              gap: "1rem"
            }}>
              <Dialog
                open={openProjects[project.name] || false}
                onClose={() => handleClose(project.name)}
                maxWidth="xl"
              >
                <DialogContent sx={{ p: 0 }}>
                  <img
                    src={project.screenshot}
                    alt={project.name}
                    width="100%"
                  />
                </DialogContent>
              </Dialog>
              <CardActionArea
                onClick={() => handleClickOpen(project.name)}
                sx={{
                  gridArea: "img"
                }}
              >
                <CardMedia
                  component="img"
                  src={project.screenshot}
                  alt={project.name}
                />
              </CardActionArea>
              <CardHeader title={project.name} sx={{
                gridArea: "head"
              }} />
              <CardContent sx={{
                gridArea: "body1"
              }}>
                <List sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "row",
                    sm: "column"
                  },
                  flexWrap: "wrap",
                  columnGap: 2,
                  columnCount: {
                    xs: 2,
                    sm: 1
                  }
                }}>
                  <ListItem sx={{
                    width: "auto"
                  }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>
                      {project.role}
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{
                    width: "auto"
                  }}>
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText>
                      {`${formatDate(project.startDate)} - ${formatDate(project.endDate)}`}
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
              <CardContent sx={{
                gridArea: "body2"
              }}>
                <List>
                  {project.impact.map((impact) => (
                    <ListItem key={impact}>
                      <ListItemIcon>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {impact}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{
                gridArea: "action"
              }}>
                <ActionButton
                  variant="outlined"
                  link={project.repo}
                  target="_blank"
                >
                  Repo
                </ActionButton>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Wrapper>
    </main>
  );
};

export default Projects;
