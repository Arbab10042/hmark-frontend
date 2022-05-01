import * as React from "react";
import { Button } from "antd";
import "../ComponentStyles/style.css";

function DownloadComponent() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div
        className="mt-2"
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid black",
          // backgroundImage=`url(${})`,
        }}
      ></div>
      <div style={{ width: "300px" }}>
        <Button type="primary" className="mt-2 ms-2 action-btn">
          Download
        </Button>
      </div>
    </div>
  );
}

export default DownloadComponent;
