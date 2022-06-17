import React, { useState } from "react";
import styled from "styled-components";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { IconButton, Tooltip } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import SVG_File from "components/SVG_Component";

const UploadDiv = styled.div<{ isDragging: boolean; images: any }>`
  height: 300px;
  width: 392px;
  border: ${({ isDragging }) =>
    isDragging ? "1px dashed red" : "1px solid black"};
  margin-left: 9%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: ${({ images }) => (images.length > 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const ImageUpload = styled.div`
  display: none;
  position: absolute;
  top: 42%;
  left: 42%;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #00000070;
  z-index: 100;
`;

const ImageDiv = styled.div<{ imageUrl: string | undefined }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  height: 100%;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 392px;
  margin-left: 9%;
  margin-bottom: 10px;
  &:hover ${ImageDiv} {
    display: flex;
    opacity: 0.5;
  }
  &:hover ${ImageUpload} {
    display: block;
  }
`;

function UploadImage() {
  const [images, setImages] = useState([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <div className="App">
      <ImageUploading multiple value={images} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <Container key={index}>
                <ImageDiv imageUrl={image.dataURL} className="image-item" />
                <ImageUpload className="image-item__btn-wrapper">
                  <IconButton
                    onClick={() => {
                      onImageRemove(index);
                    }}
                  >
                    <Tooltip title="Remove">
                      <DeleteOutline
                        sx={{
                          color: "white",
                        }}
                        fontSize="large"
                      />
                    </Tooltip>
                  </IconButton>
                </ImageUpload>
              </Container>
            ))}
            <UploadDiv
              isDragging={isDragging}
              images={images}
              onClick={() => {
                onImageUpload();
              }}
              {...dragProps}
            >
              <SVG_File filename="import" />
              Click or Drop here
            </UploadDiv>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImage;
