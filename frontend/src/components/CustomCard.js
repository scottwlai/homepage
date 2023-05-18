import React from "react"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Card, CardMedia, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText
} from "@mui/material";

const CustomCard = ({
  content, flexDirection
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
      <CardContent sx={{
        p: 6
      }}>
        <Typography variant="h3">
          {content.title}
        </Typography>
        <List>
          <ListItem sx={{
            p: 0
          }}>
            <ListItemIcon sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: "3rem"
            }}>
              {content.subtitleIcon}
            </ListItemIcon>
            <ListItemText primary={content.subtitle} />
          </ListItem>
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
          <List>
            {content.bullets.map((bullet, index) => {
              return (
                <ListItem key={index} sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  p: 0
                }}>
                  <ListItemIcon sx={{
                    display: "flex",
                    justifyContent: "center",
                    minWidth: "3rem",
                    p: "0.625rem"
                  }}>
                    <FiberManualRecordIcon sx={{
                      fontSize: "0.625rem",
                      color: "#333"
                    }} />
                  </ListItemIcon>
                  <ListItemText primary={bullet} />
                </ListItem>
              );
            })}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
