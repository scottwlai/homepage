import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  useTheme
} from "@mui/material";
import {
  Link
} from "react-router-dom";

const Section = ({
  title,
  icon,
  action,
  sx,
  children
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        p: {
          xs: "clamp(0rem, 3vw - 0.5rem, 2rem)",
          sm: "clamp(0.75rem, 2vw, 1.125rem)",
          md: "clamp(1.125rem, 3vw, 2rem)"
        }
      }}
    >
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
      />
      <CardContent sx={sx}>
        {children}
      </CardContent>
      {action && (
        <CardActions>
          <Button component={Link} to={action.link}>
            <Typography variant="button">
              {action.text}
            </Typography>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Section;
