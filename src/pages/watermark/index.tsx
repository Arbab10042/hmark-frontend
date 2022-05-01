import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import SubmitComponent from "./components/SubmitComponent";
import DownloadComponent from "./components/DownloadComponent";
import Footer from "../../components/Footer";

const BodyDiv = styled.div<{ height?: string }>`
  background-color: "#ecf3fc";
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 5% 10% 10% 10%;
  color: #4a5568;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 34px;
`;

const P = styled.p<{ fontWeight?: string; fontSize?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  font-size: ${({ fontWeight }) => fontWeight ?? "18px"}; ;
`;

function Watermark() {
  const breadcrumb = ["Home", "Watermark"];
  return (
    <>
      <Navbar />
      <HeaderBreadcrumb breadcrumbItems={breadcrumb} />
      <BodyDiv>
        <Title>Upload Your Files</Title>
        <P>Most image and video types are supported.</P>
        <div className="container ms-md-5">
          <div className="row justify-content-between">
            <div
              className="col-md-5 col-sm-12"
              style={{ margin: "10px 0 10px 0" }}
            >
              <SubmitComponent />
            </div>
            <div className="col-md-5 col-sm-12" style={{ marginLeft: "25px" }}>
              <DownloadComponent />
            </div>
          </div>
        </div>
        <P>...or drag & drop files files in the upload box.</P>
      </BodyDiv>
      <Footer />
    </>
  );
}

export default Watermark;
