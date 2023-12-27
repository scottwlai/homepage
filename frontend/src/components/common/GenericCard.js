import React, {
  useState
} from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import {
  Link
} from "react-router-dom";
import ActionButton from "./ActionButton";
import ActionButtonWithDialog from "./ActionButtonWithDialog";

const GenericCard = ({
  data,
  sx
}) => {
  return (
    <Card elevation={3} sx={{
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
          titleTypographyProps={{
            variant: "h3"
          }}
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
      {data.actions && (<CardActions sx={{ alignItems: "flex-start" }}>
        {data.actions.map((action, index) => action.link ? (
          <ActionButton
            key={index}
            variant={index ? "outlined" : "contained"}
            link={action.link}
            target={index ? "_blank" : "_self"}
          >
            {action.text}
          </ActionButton>
        ) : (
          <ActionButtonWithDialog
            key={index}
            data={data}
          >
            {action.text}
          </ActionButtonWithDialog>
        ))}
      </CardActions>)}
    </Card>
  );
}

export default GenericCard;
