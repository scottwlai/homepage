import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  useTheme
} from "@mui/material";

const Section = ({
  title,
  icon,
  children
}) => {
  const theme = useTheme();

  return (
    <Card raised sx={{ height: "100%" }}>
      <CardHeader
        title={title}
        avatar={
          <Avatar variant="rounded" sx={{
            background: "none",
            color: theme.palette.text.primary
          }}>
            {icon}
          </Avatar>
        }
        titleTypographyProps={{
          variant: "h2"
        }}
        sx={{
          px: 0
        }}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default Section;
