import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const CustomListItem = ({
  icon, text, textProps
}) => {
  return (
    <ListItem>
      {icon && (
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )}
      <ListItemText primaryTypographyProps={textProps}>
        {text}
      </ListItemText>
    </ListItem>
  );
}

export default CustomListItem;
