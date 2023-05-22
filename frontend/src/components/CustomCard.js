import React from "react"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const CustomCard = ({
  content, flexDirection, children
}) => {
  return (
    <Card component="section" sx={{
      display: "flex",
      flexDirection: flexDirection,
      borderRadius: "1.5rem"
    }}>
      {content.image && (
        <CardMedia
          component="img"
          src={content.image}
          sx={{
            height: "100%",
            maxWidth: 300
          }}
        />
      )}
      <CardContent>
        <Typography variant="h3">
          {content.title}
        </Typography>
        <List>
          {content.subtitles && content.subtitles.map((subtitle, subtitleIndex) => {
            return (
              <ListItem key={subtitleIndex} sx={{
                p: 0
              }}>
                <ListItemIcon sx={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: "3rem"
                }}>
                  {subtitle.subtitleIcon}
                </ListItemIcon>
                <ListItemText primary={subtitle.subtitle} />
              </ListItem>
            );
          })}
          {content.startDate && (
            <ListItem sx={{
              p: 0
            }}>
              <ListItemIcon sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: "3rem"
              }}>
                <CalendarMonthIcon sx={{
                  fontSize: "1.375rem",
                  color: "#333"
                }} />
              </ListItemIcon>
              {content.endDate ? (
                <ListItemText primary={content.startDate + " - " + content.endDate} />
              ) : (
                <ListItemText primary={content.startDate} />
              )}
            </ListItem>
          )}
          {content.location && (
            <ListItem sx={{
              p: 0
            }}>
              <ListItemIcon sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: "3rem"
              }}>
                <PlaceIcon sx={{
                  fontSize: "1.375rem",
                  color: "#333"
                }} />
              </ListItemIcon>
              <ListItemText primary={content.location} />
            </ListItem>
          )}
        </List>
        {content.bullets && (
          <List sx={content.tags ? {
            flexWrap: "wrap",
            display: "flex",
            gap: 1
          } : {
          }}>
            {content.bullets.map((bullet, bulletIndex) => {
              return (
                <ListItem key={bulletIndex} sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  p: 0,
                  width: "auto"
                }} >
                  {!content.tags && (
                    <ListItemIcon sx={{
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "3rem",
                      py: "0.625rem"
                    }} >
                      <FiberManualRecordIcon sx={{
                        fontSize: "0.625rem",
                        color: "#333"
                      }} />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={bullet} primaryTypographyProps={{
                    variant: "body2",
                    border: content.tags ? 1 : 0,
                    bgcolor: content.tags ? "#f9f9f9" : "inherit",
                    borderRadius: "0.625rem",
                    borderColor: "#333",
                    p: content.tags ? "0.125rem 0.25rem" : "0.25rem 0rem"
                  }} sx={{
                    m: 0
                  }} />
                </ListItem>
              );
            })}
          </List>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
