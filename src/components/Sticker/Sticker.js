import React from "react";
import useImage from "use-image";
import { Image } from "react-konva";

const URLImage = ({ image, width, height }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      width={width}
      height={height}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const Sticker = ({ src, width, height, onDragStart }) => {
  return (
    <img
      alt="a"
      src={src}
      draggable="true"
      onDragStart={onDragStart}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};


export { URLImage, Sticker };
