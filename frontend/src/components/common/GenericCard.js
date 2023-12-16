import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
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
  action,
  children
}) => {
  return (
    <Card>
      {data.image && (
        <CardMedia
          component="img"
          src={data.image}
        />
      )}
      <CardContent>
        {data.title && (
          <Typography variant="h2">
            {data.title}
          </Typography>
        )}
        <List>
          {data.subtitles.map((entry, index) => {
            return (
              <ListItem key={index}>
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
        {children}
      </CardContent>
      <CardActions>
        <Button component={Link} to={action.to}>
          <Typography variant="button">
            {action.text}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default GenericCard;
