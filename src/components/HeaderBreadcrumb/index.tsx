import * as React from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";

const BCContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  box-shadow: 0px 3px 2px -1px #cfcfcf;
`;

function HeaderBreadcrumb({ breadcrumbItems }: { breadcrumbItems: string[] }) {
  return (
    <BCContainer>
      <Breadcrumb className="fs-5 ms-4">
        {breadcrumbItems.map((item) => {
          return (
            <Breadcrumb.Item key={item} href="">
              {item}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </BCContainer>
  );
}

export default HeaderBreadcrumb;
