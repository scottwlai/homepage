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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
      {data.actions && (
        <CardActions sx={{
          alignItems: "flex-start"
        }}>
          {data.actions.map((action, index) => {
            const [ open, setOpen ] = useState(false);

            const handleClickOpen = () => {
              setOpen(true);
            };

            const handleClose = () => {
              setOpen(false);
            };

            return (
              <>
                {!action.link && (
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                  >
                    <DialogTitle>
                      {data.title}
                    </DialogTitle>
                    <DialogContent dividers>
                      <List>
                        {data.info.map((entry, index) => {
                          return (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <ArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                {entry}
                              </ListItemText>
                            </ListItem>
                          );
                        })}
                      </List>
                    </DialogContent>
                    <Stack spacing={1} direction="row" component={DialogActions}>
                      {data.actions.map((action, index) => {
                        return (action.link ? (
                          <Button
                            variant={index ? "outlined" : "contained"}
                            component={Link}
                            to={action.link ? action.link : null}
                            target={action.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            onClick={action.link ? null : handleClickOpen}
                            key={index}>
                            <Typography variant="button">
                              {action.text}
                            </Typography>
                          </Button>
                        ) : (<></>));
                      })}
                      <Button onClick={handleClose}>
                        Close
                      </Button>
                    </Stack>
                  </Dialog>
                )}
                <Button
                  variant={index ? "outlined" : "contained"}
                  component={Link}
                  to={action.link ? action.link : null}
                  target={index ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={action.link ? null : handleClickOpen}
                  key={index}>
                  <Typography variant="button">
                    {action.text}
                  </Typography>
                </Button>
              </>
            );
          })}
        </CardActions>
      )}
    </Card>
  );
}

export default GenericCard;
