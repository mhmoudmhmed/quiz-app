import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TextFieldComp = () => {
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          variant="outlined"
          label="Your Name"
          type="text"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
