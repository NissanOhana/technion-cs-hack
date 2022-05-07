import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMeetingDocs } from "../firebase";

export const HomePage = () => {
  const [result, setResult] = useState<any>();
  const [refetch, setRefetch] = useState<boolean>(false);

  /**
   * This is the useEffect hook-  https://reactjs.org/docs/hooks-effect.html
   * Lets us to preform side effect in out component - like fetch data from remote API.
   */
  useEffect(() => {
    setRefetch(false);
    let active = true;
    load();
    return () => {
      active = false;
    };

    async function load() {
      setResult(undefined);
      const res = await getMeetingDocs();
      if (!active) {
        return;
      }
      setResult(res);
    }
    // This is the dependencies array. Each time some of the array value changes, the useEffect function re-run.
  }, [refetch]);

  console.log("From DB", result);

  return (
    <Box>
      <Typography variant='h3'>אחלה של עמוד בית</Typography>
    </Box>
  );
};
