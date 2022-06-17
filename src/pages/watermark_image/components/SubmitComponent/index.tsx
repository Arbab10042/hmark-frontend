import React, { useState } from "react";
import UploadFile from "../../../../components/Upload";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  InfoOutlined,
} from "@mui/icons-material";

import "../ComponentStyles/style.css";

function SubmitComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const infoString =
    "This key will be used to authenticate your file. Please make sure you choose a strong key.";

  return (
    <>
      <UploadFile />
      <div className="input-container">
        <TextField
          label="Key"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          sx={{
            width: "300px",
          }}
          // onChange={someChangeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" className="action-btn mt-1 ms-2">
          Submit
        </Button>
        <Tooltip title={infoString} className="mt-2 ms-2">
          <InfoOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip>
      </div>
    </>
  );
}

export default SubmitComponent;
