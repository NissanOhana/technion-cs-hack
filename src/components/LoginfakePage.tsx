import { Button, Box, Typography} from "@mui/material";


export const LoginfakePage= () => {
  return (
    <form>
      <br></br> <br></br> <br></br>
        <label> הכנס כתובת דוא"ל <br></br>
          <input type="text" />
        </label>
        <br></br> <br></br> 
        <input type="submit" value="Submit" />
    </form>
  );
};