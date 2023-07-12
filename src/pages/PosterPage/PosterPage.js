// hooks
import { useRef, useState } from "react";
import { Stage, Layer } from "react-konva";

// components
import { URLImage, Sticker } from "../../components/Sticker/Sticker";

// stickers
import classes from "./PosterPage.module.css";
import sticker1 from "../../assets/images/1.png";
import sticker2 from "../../assets/images/2.png";
import sticker3 from "../../assets/images/3.png";
import sticker4 from "../../assets/images/4.png";
import sticker5 from "../../assets/images/5.png";
import sticker6 from "../../assets/images/6.png";
import sticker7 from "../../assets/images/7.png";
import sticker8 from "../../assets/images/8.png";
import sticker9 from "../../assets/images/9.png";
import sticker10 from "../../assets/images/10.png";
import sticker11 from "../../assets/images/11.png";
import sticker12 from "../../assets/images/12.png";
import sticker13 from "../../assets/images/13.png";
import sticker14 from "../../assets/images/14.png";
import sticker15 from "../../assets/images/15.png";
import sticker16 from "../../assets/images/16.png";
import sticker17 from "../../assets/images/17.png";
import sticker18 from "../../assets/images/18.png";
import sticker19 from "../../assets/images/19.png";
import sticker20 from "../../assets/images/20.png";
import sticker21 from "../../assets/images/21.png";
import sticker22 from "../../assets/images/22.png";
import sticker23 from "../../assets/images/23.png";
import sticker24 from "../../assets/images/24.png";
import sticker25 from "../../assets/images/25.png";
import sticker26 from "../../assets/images/26.png";
import sticker27 from "../../assets/images/27.png";
import sticker28 from "../../assets/images/28.png";
import sticker29 from "../../assets/images/29.png";
import sticker30 from "../../assets/images/30.png";
import sticker31 from "../../assets/images/31.png";
import sticker32 from "../../assets/images/32.png";
import sticker33 from "../../assets/images/33.png";
import sticker34 from "../../assets/images/34.png";
import sticker35 from "../../assets/images/35.png";
import sticker36 from "../../assets/images/36.png";
import sticker37 from "../../assets/images/37.png";
import sticker38 from "../../assets/images/38.png";
import sticker39 from "../../assets/images/39.png";
import sticker40 from "../../assets/images/40.png";
import sticker41 from "../../assets/images/41.png";

const PosterPage = ({ posterImageRef }) => {
  const dragUrl = useRef();
  const stageRef = useRef();
  const [images, setImages] = useState([]);

  const handleDragStart = (e) => {
    dragUrl.current = e.target.src;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    setImages((prevImages) => [
      ...prevImages,
      {
        ...stageRef.current.getPointerPosition(),
        src: dragUrl.current,
      },
    ]);
  };

  const handleDragEnd = (index, newPosition) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = {
        ...updatedImages[index],
        x: newPosition.x,
        y: newPosition.y,
      };
      return updatedImages;
    });
  };

  const stickerProps = [
    { src: sticker1, top: 146, left: 84 },
    { src: sticker2, top: 140, left: 75 },
    { src: sticker3, top: 158, left: 88 },
    { src: sticker4, top: 166, left: 78, zIndex: 2 },
    { src: sticker5, top: 166, left: 80, zIndex: 3 },
    { src: sticker6, top: 159, left: 71 },
    { src: sticker7, top: 169, left: 76, zIndex: 3 },
    { src: sticker8, top: 172, left: 81, zIndex: 3 },
    { src: sticker9, top: 169, left: 72 },
    { src: sticker10, top: 179, left: 72, zIndex: 3 },
    { src: sticker11, top: 199, left: 93 },
    { src: sticker12, top: 212, left: 91 },
    { src: sticker13, top: 187, left: 80, zIndex: 1 },
    { src: sticker14, top: 206, left: 81 },
    { src: sticker15, top: 197, left: 75 },
    { src: sticker16, top: 199, left: 71 },
    { src: sticker17, top: 210, left: 70 },
    { src: sticker18, top: 220, left: 71 },
    { src: sticker19, top: 228, left: 71 },
    { src: sticker20, top: 225, left: 78 },
    // left side
    { src: sticker21, top: 188, left: 17 },
    { src: sticker22, top: 192, left: 3, zIndex: 2 },
    { src: sticker23, top: 202, left: 1, zIndex: 1 },
    { src: sticker24, top: 223, left: 17 },
    { src: sticker25, top: 163, left: 6, zIndex: 2 }, // two girls
    { src: sticker26, top: 146, left: 19 },
    { src: sticker27, top: 133, left: 17 },
    { src: sticker28, top: 185, left: 6 },
    { src: sticker29, top: 200, left: 14 },
    { src: sticker30, top: 213, left: 2.5, zIndex: 3 }, // two diamonds
    { src: sticker31, top: 227, left: 9 }, // "I OBJECT!"
    { src: sticker32, top: 181, left: 22 }, 
    { src: sticker33, top: 152, left: 4, zIndex: 1 }, // diamond heart
    { src: sticker34, top: 164, left: 0 },
    { src: sticker35, top: 178, left: 2 },
    { src: sticker36, top: 176, left: 17 },
    { src: sticker37, top: 182, left: 29 },
    { src: sticker38, top: 186, left: 17 },
    { src: sticker39, top: 162, left: 19 }, // heart "HAVARD"
    { src: sticker40, top: 170, left: 23 },
    { src: sticker41, top: 195, left: 71 },
  ];

  return (
    <div className={classes["poster-background"]}>
      {stickerProps.map((props, index) => (
        <Sticker
          key={index}
          src={props.src}
          top={props.top}
          left={props.left}
          zIndex={props.zIndex}
          onDragStart={handleDragStart}
        />
      ))}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        ref={posterImageRef}
        className={classes["stage-container"]}
      >
        <Stage width={560} height={720} ref={stageRef}>
          <Layer>
            {images.map((image, index) => (
              <URLImage
                key={index}
                image={image}
                width={image.width}
                height={image.height}
                onDragEnd={(newPosition) => handleDragEnd(index, newPosition)}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default PosterPage;
