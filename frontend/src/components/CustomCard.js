import React from "react"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  List
} from "@mui/material";
import CustomListItem from "./CustomListItem";

const CustomCard = ({
  content, flexDirection, children
}) => {
  return (
    <Card component="section" sx={{
      display: "flex",
      flexDirection: flexDirection
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
              <CustomListItem
                key={subtitleIndex}
                icon={subtitle.subtitleIcon}
                text={subtitle.subtitle}
              />
            );
          })}
          {content.startDate && (
            <CustomListItem
              icon=<CalendarMonthIcon/>
              text={content.endDate ? content.startDate + " - " + content.endDate : content.startDate}
            />
          )}
          {content.location && (
            <CustomListItem
              icon=<PlaceIcon/>
              text={content.location}
            />
          )}
        </List>
        {content.bullets && !content.tags && (
          <List>
            {content.bullets.map((bullet, bulletIndex) => {
              return (
                <CustomListItem
                  key={bulletIndex}
                  icon=<ChevronRightIcon/>
                  text={bullet}
                />
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
