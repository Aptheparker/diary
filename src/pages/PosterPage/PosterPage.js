// hooks
import { useRef, useState, useEffect } from "react";
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
  const [stageDimensions, setStageDimensions] = useState({
    width: 500,
    height: 650,
  });

  const updateStageDimensions = () => {
    const isiMac = window.innerWidth >= 2200; // Adjust this value according to iMac viewport width
    setStageDimensions({
      width: isiMac ? 700 : 500,
      height: isiMac ? 1000 : 650,
    });
  };

  useEffect(() => {
    // Call the function on mount to set the initial stage dimensions
    updateStageDimensions();

    // Add event listener to update the stage dimensions on window resize
    window.addEventListener("resize", updateStageDimensions);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateStageDimensions);
    };
  }, []);

  const handleDrag = (e) => {
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

  const stickerProps = [
    { src: sticker1, top: 11, left: 84 },
    { src: sticker2, top: 5, left: 75 },
    { src: sticker3, top: 23, left: 88 },
    { src: sticker4, top: 31, left: 78, zIndex: 2 },
    { src: sticker5, top: 31, left: 80, zIndex: 3 },
    { src: sticker6, top: 24, left: 71 },
    { src: sticker7, top: 34, left: 76, zIndex: 3 },
    { src: sticker8, top: 37, left: 81, zIndex: 3 },
    { src: sticker9, top: 34, left: 72 },
    { src: sticker10, top: 44, left: 72, zIndex: 3 },
    { src: sticker11, top: 64, left: 93 },
    { src: sticker12, top: 77, left: 91 },
    { src: sticker13, top: 52, left: 80, zIndex: 1 },
    { src: sticker14, top: 71, left: 81 },
    { src: sticker15, top: 62, left: 75 },
    { src: sticker16, top: 64, left: 71 },
    { src: sticker17, top: 75, left: 70 },
    { src: sticker18, top: 85, left: 71 },
    { src: sticker19, top: 93, left: 71 },
    { src: sticker20, top: 90, left: 78 },
    // left side
    { src: sticker21, top: 53, left: 17 },
    { src: sticker22, top: 67, left: 7, zIndex: 2 },
    { src: sticker23, top: 67, left: 1, zIndex: 1 },
    { src: sticker24, top: 88, left: 17 },
    { src: sticker25, top: 28, left: 6, zIndex: 2 }, // two girls
    { src: sticker26, top: 11, left: 19 },
    { src: sticker27, top: -2, left: 17 },
    { src: sticker28, top: 50, left: 6 },
    { src: sticker29, top: 65, left: 14 },
    { src: sticker30, top: 78, left: 2.5, zIndex: 3 }, // two diamonds
    { src: sticker31, top: 92, left: 9 }, // "I OBJECT!"
    { src: sticker32, top: 46, left: 22 },
    { src: sticker33, top: 17, left: 4, zIndex: 1 }, // diamond heart
    { src: sticker34, top: 29, left: 0 },
    { src: sticker35, top: 43, left: 2 },
    { src: sticker36, top: 41, left: 17 },
    { src: sticker37, top: 47, left: 29 },
    { src: sticker38, top: 51, left: 17 },
    { src: sticker39, top: 27, left: 19 }, // heart "HAVARD"
    { src: sticker40, top: 35, left: 23 },
    { src: sticker41, top: 60, left: 71 },
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
          onDragStart={handleDrag}
        />
      ))}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        ref={posterImageRef}
        className={classes["stage-container"]}
      >
        <Stage
          width={stageDimensions.width}
          height={stageDimensions.height}
          ref={stageRef}
        >
          <Layer>
            {images.map((image, index) => (
              <URLImage
                key={index}
                image={image}
                width={image.width}
                height={image.height}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default PosterPage;
