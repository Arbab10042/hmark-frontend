import React from "react";
import UploadFile from "../../../../components/Upload";
import { Button, Input, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "../ComponentStyles/style.css";

function SubmitComponent() {
  const infoString =
    "This key will be used to authenticate your file. Please make sure you choose a strong key.";

  return (
    <>
      <UploadFile />
      <div className="input-container">
        <Input.Password
          className="mt-1"
          style={{
            width: "230px",
          }}
          placeholder="Enter Key"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Button type="primary" className="action-btn mt-1 ms-2">
          Submit
        </Button>
        <Tooltip title={infoString} className="mt-2 ms-2">
          <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip>
      </div>
    </>
  );
}

export default SubmitComponent;
