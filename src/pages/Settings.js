import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import TextFieldComp from "../components/TextFieldComp";

const Settings = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
