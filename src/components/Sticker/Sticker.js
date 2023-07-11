import { React, useRef } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const URLImage = ({ image, width, height }) => {
  const [img] = useImage(image.src);
  const imageRef = useRef();

  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      width={width}
      height={height}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      draggable
      ref={imageRef}    />
  );
};

const Sticker = ({ src, width, height, top, left, zIndex, onDragStart }) => {
  return (
    <img
      alt="a"
      src={src}
      draggable="true"
      onDragStart={onDragStart}
      style={{
        width: `${width}px`, // Adjust the scaling as needed
        height: `${height}px`, // Adjust the scaling as needed
        top: `${top}px`, // Adjust the scaling as needed
        left: `${left}px`, // Adjust the scaling as needed
        zIndex: `${zIndex}`,
        position: "absolute",
      }}
    />
  );
};


export { URLImage, Sticker };
