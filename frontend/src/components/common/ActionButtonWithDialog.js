import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React, {
  useState
} from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ActionButton from "./ActionButton";
import {
  Link
} from "react-router-dom";

const ActionButtonWithDialog = ({
  data,
  children
}) => {
  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {data.title}
        </DialogTitle>
        {data.info && (<DialogContent dividers>
          <List>
            {data.info.map((entry) => {
              return (
                <ListItem key={entry}>
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
        </DialogContent>)}
        <Stack spacing={1} direction="row" component={DialogActions}>
          {data.actions.map((action, index) => action.link ? (
            <ActionButton
              key={index}
              variant="outlined"
              link={action.link}
              target={index ? "_blank" : "_self"}
            >
              {action.text}
            </ActionButton>
          ) : (<React.Fragment key={index} />))}
          <Button onClick={handleClose}>
            <Typography variant="button">
              Close
            </Typography>
          </Button>
        </Stack>
      </Dialog>
      <Button
        variant="contained"
        component={Link}
        onClick={handleClickOpen}
      >
        <Typography variant="button">
          {children}
        </Typography>
      </Button>
    </>
  )
};

export default ActionButtonWithDialog;
