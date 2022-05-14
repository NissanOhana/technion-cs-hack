import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMeetingDocs } from "../firebase";

export const HomePage = () => {
  const [result, setResult] = useState<any>();

  /**
   * This is the useEffect hook-  https://reactjs.org/docs/hooks-effect.html
   * Lets us to preform side effect in out component - like fetch data from remote API.
   */
  useEffect(() => {
    async function load() {
      const res = await getMeetingDocs();
      setResult(res);
    }
    load();
    // This is the dependencies array. Each time some of the array value changes, the useEffect function re-run.
    // If the array empty - the function will only runs once (when the component mount)
  }, []);

  console.log("From DB", result);

  return (
    <Box>
      <Typography variant='h3'>אחלה של עמוד בית</Typography>
    </Box>
  );
};
