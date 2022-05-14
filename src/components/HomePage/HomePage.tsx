import { Box, Fab, Typography } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { meetingCollectionRef } from "../../firebase";
import { MeetItem } from "../../types";
import { AddFriendDialog } from "./AddFriendDialog";
import { FriendCard } from "./FriendCard";

export const HomePage = () => {
  const [result, setResult] = useState<MeetItem[]>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  /**
   * This is the useEffect hook-  https://reactjs.org/docs/hooks-effect.html
   * Lets us to preform side effect in out component - like fetch data from remote API.
   */
  useEffect(() => {
    onSnapshot(meetingCollectionRef, (snapshot: any) => {
      setResult(
        snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    });
    // This is the dependencies array. Each time some of the array value changes, the useEffect function re-run.
    // If the array empty - the function will only runs once (when the component mount)
  }, []);

  const handleAddFreind = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  // Adding Dialog component
  return (
    <Box>
      <Typography variant='h3'>אחלה של עמוד בית</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          margin: "25px",
          flexWrap: "wrap",
          p: 1,
        }}
      >
        {result &&
          result.map((item) => <FriendCard key={item.id} meetItem={item} />)}
      </Box>
      <Fab
        sx={{ position: "sticky", bottom: 16, right: 16 }}
        color='primary'
        aria-label='add'
        onClick={handleAddFreind}
      >
        <Typography variant='h4' color='white'>
          +
        </Typography>
      </Fab>
      <AddFriendDialog open={openDialog} handleClose={handleClose} />
    </Box>
  );
};
