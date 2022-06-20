import React, { useState } from "react";
import axios from "axios";
import UploadImage from "components/Upload";
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

function SubmitComponent({
  setLoading,
  setResult,
}: {
  setLoading: (loading: boolean) => void;
  setResult: (result: string) => void;
}) {
  const [images, setImages] = useState<any[]>([]);
  // const [showPassword, setShowPassword] = useState(false);
  // const handleClickShowPassword = () => setShowPassword(!showPassword);
  // const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleSubmit = () => {
    if (images.length > 0) {
      console.log("BEFORE REQUEST");
      setLoading(true);
      // console.log(images[0]);
      const dataURI = images[0].dataURL;
      const imageData = dataURI.split(",")[1];
      axios
        .post("http://127.0.0.1:8000/image/watermark/", {
          image: imageData,
        })
        .then((res) => {
          console.log("AFTER REQUEST");
          setLoading(false);
          console.log(res);
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  // const infoString =
  //   "This key will be used to authenticate your file. Please make sure you choose a strong key.";

  return (
    <>
      <UploadImage images={images} setImages={setImages} />
      <div className="input-container">
        {/* <TextField
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
        /> */}
        <Button
          variant="contained"
          onClick={handleSubmit}
          className="action-btn mt-1 ms-2"
        >
          Submit
        </Button>
        {/* <Tooltip title={infoString} className="mt-2 ms-2">
          <InfoOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip> */}
      </div>
    </>
  );
}

export default SubmitComponent;
