import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { addMeetingDoc } from "../../firebase";
import { MeetItem } from "../../types";

interface AddFriendDialogProps {
  open: boolean;
  handleClose: () => void;
}

// The Partial Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.
// We do it here, because we want firestore to handle the id.
const emptyMeetItem: Partial<MeetItem> = {
  name: "",
  location: "",
  team: "",
  date: Timestamp.now(),
};
export const AddFriendDialog: React.FC<AddFriendDialogProps> = ({
  open,
  handleClose,
}) => {
  const [meetItem, setMeetItem] = useState<Partial<MeetItem>>(emptyMeetItem);

  const handleSubmit = () => {
    // Wow! wait. what about validations?
    addMeetingDoc(meetItem);

    setMeetItem(emptyMeetItem);
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /**  onChange event element.
     * We can check the source of the event with event.target.id
     * We can check the value of the event with event.target.value
     * */
    const meetItemObjProperty = event.target.id;
    let date: Timestamp;
    if (meetItemObjProperty === "date") {
      date = Timestamp.fromDate(new Date(event.target.value));
    }
    setMeetItem((prevState) => {
      // Update only the relevant property.
      // Take the old state, and change only what necessary
      return {
        ...prevState,
        [meetItemObjProperty]:
          meetItemObjProperty === "date" ? date : event.target.value,
      };
      // With the "[var]" syntax, we can edit dynamicly objects.
    });
  };

  console.log(`--> Updated State:`, meetItem);

  // Think about how can we reduce the component (in terms of code)
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>הוספת חבר</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: "center" }}>
          הוסף את עצמך למאגר החברים
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Name'
          fullWidth
          variant='standard'
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='team'
          label='Team'
          fullWidth
          variant='standard'
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin='dense'
          id='location'
          label='Location Event'
          fullWidth
          variant='standard'
          onChange={handleChange}
        />
        <TextField
          id='date'
          label='Date'
          type='date'
          onChange={handleChange}
          sx={{ width: 220, marginTop: "15px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Sumbit</Button>
      </DialogActions>
    </Dialog>
  );
};
