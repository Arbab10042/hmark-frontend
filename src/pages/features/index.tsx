import * as React from "react";
import Navbar from "../../components/Navbar";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";

function Features() {
  const breadcrumb = ["Home", "Features"];
  return (
    <>
      <Navbar navBtnText="Enter" />
      <HeaderBreadcrumb breadcrumbItems={breadcrumb} />
    </>
  );
}

export default Features;
