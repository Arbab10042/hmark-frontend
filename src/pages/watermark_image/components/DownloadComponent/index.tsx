import * as React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import "../ComponentStyles/style.css";
import loadingGif from "../../../../assets/loading.gif";

const DownloadDiv = styled.div<{ res: string }>`
  display: ${({ res }) => (res.length > 0 ? "none" : "block")};
  margin-top: 10px;
  height: 300px;
  width: 392px;
  border: 1px solid black;
  background-color: white;
`;

function DownloadComponent({
  loading,
  result,
}: {
  loading: boolean;
  result: string;
}) {
  const download = (e: any) => {
    fetch(result, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.download = "image.png";
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <DownloadDiv res={result}>
        {loading && (
          <img
            src={loadingGif}
            height="298px"
            width="300px"
            alt="Computer man"
          />
        )}
      </DownloadDiv>
      {result.length > 0 && (
        <img src={result} height="300px" width="392px" alt="response" />
      )}
      <div style={{ width: "300px", marginLeft: "50px" }}>
        <Button
          variant="contained"
          className="mt-2 action-btn"
          onClick={download}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default DownloadComponent;
