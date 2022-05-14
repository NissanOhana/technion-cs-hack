import { Timestamp } from "firebase/firestore";

export type MeetItem = {
  id: string;
  location: string;
  name: string;
  team: string;
  date: Timestamp;
};
