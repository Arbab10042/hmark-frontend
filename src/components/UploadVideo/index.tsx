import React, { useState, useRef } from "react";
import styled from "styled-components";
import { IconButton, Tooltip } from "@mui/material";
import { Close } from "@mui/icons-material";
import SVG_File from "components/SVG_Component";

const UploadDiv = styled.div<{ source: any }>`
  height: 300px;
  width: 392px;
  border: 1px solid black;
  margin-left: 9%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: ${({ source }) => (source.length > 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 300px;
  width: 392px;
  margin-left: 9%;
  margin-bottom: 30px;
  margin-top: -20px;
`;

function UploadVideo() {
  const inputRef = useRef() as any;

  const [source, setSource] = useState("");
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event: any) => {
    inputRef.current.click();
  };

  return (
    <div>
      <UploadDiv source={source} onClick={handleChoose}>
        <div
          style={{
            display: "none",
          }}
        >
          <input
            ref={inputRef}
            className="VideoInput_input"
            type="file"
            onChange={handleFileChange}
            accept=".mov,.mp4"
          />
        </div>
        <SVG_File filename="import" />
        Click here to upload
      </UploadDiv>
      {source && (
        <Container>
          <IconButton
            sx={{
              float: "right",
            }}
            onClick={() => {
              setSource("");
            }}
          >
            <Tooltip title="Remove">
              <Close
                sx={{
                  color: "black",
                }}
                fontSize="small"
              />
            </Tooltip>
          </IconButton>
          <video width="100%" height="95%" controls src={source} />
        </Container>
      )}
    </div>
  );
}

export default UploadVideo;
