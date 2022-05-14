import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { MeetItem } from "../../types";

interface FreindCardProps {
  meetItem: MeetItem;
}

export const FriendCard: React.FC<FreindCardProps> = ({ meetItem }) => {
  const gameInfo = () => {
    const dateString = meetItem.date?.toDate().toDateString();
    // String interpolation:
    return `The event: ${meetItem.location} - ${dateString}`;
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {meetItem.name}
        </Typography>
        <Typography color='text.secondary'>My Team: {meetItem.team}</Typography>
        <Typography color='text.secondary'>{gameInfo()}</Typography>
      </CardContent>
      <CardActions>
        <Button>צור קשר</Button>
      </CardActions>
    </Card>
  );
};
