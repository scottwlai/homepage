import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";

const GenericCard = ({
  data,
  sx
}) => {
  return (
    <Card sx={{
      ...sx,
      m: {
        xs: "0 1rem 1rem",
        sm: "0 0 1rem"
      }
    }}>
      {data.image && (
        <CardMedia
          component="img"
          src={data.image}
          sx={{
            borderRadius: "4px",
            gridArea: "img",
            alignSelf: "center"
          }}
        />
      )}
      {data.title && (
        <CardHeader
          title={data.title}
          titleTypographyProps={{variant: "h3"}}
        />
      )}
      <CardContent>
        <List sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: 2
        }}>
          {data.subtitles.map((entry, index) => {
            return (
              <ListItem key={index} sx={{
                width: "auto"
              }}>
                <ListItemIcon>
                  {entry.icon}
                </ListItemIcon>
                <ListItemText>
                  {entry.subtitle}
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
      </CardContent>
      {data.actions && (
        <CardActions sx={{
          alignItems: "flex-start"
        }}>
          {data.actions.map((action, index) => {
              return (
                <Button variant={index ? "outlined" : "contained"} component={Link} to={action.link} key={index}>
                  <Typography variant="button">
                    {action.text}
                  </Typography>
                </Button>
              );
            })
          }
        </CardActions>
      )}
    </Card>
  );
}

export default GenericCard;
