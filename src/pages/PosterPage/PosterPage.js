// hooks
import { useRef, useState } from "react";
import { Stage, Layer } from "react-konva";

// components
import { URLImage, Sticker } from "../../components/Sticker/Sticker";
import background from "./poster.png";

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
    // register event position
    stageRef.current.setPointersPositions(e);
    // add image
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

  return (
    <div className={classes["poster-background"]}>
      <Sticker
        src={sticker1}
        top={1000}
        left={950}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker2}
        top={930}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker3}
        top={1080}
        left={1000}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker4}
        top={1150}
        left={850}
        zIndex={2}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker5}
        top={1145}
        left={950}
        zIndex={3}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker6}
        top={1080}
        left={850}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker7}
        top={1150}
        left={870}
        zIndex={3}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker8}
        top={1200}
        left={950}
        zIndex={3}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker9}
        top={1150}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker10}
        top={1240}
        left={800}
        zIndex={3}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker11}
        top={1420}
        left={1080}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker12}
        top={1500}
        left={1050}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker13}
        top={1300}
        left={940}
        zIndex={1}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker14}
        top={1460}
        left={900}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker15}
        top={1400}
        left={860}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker16}
        top={1450}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker17}
        top={1500}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker18}
        top={1560}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker19}
        top={1620}
        left={820}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker20}
        top={1600}
        left={860}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker21}
        top={1380}
        left={170}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker22}
        top={1350}
        left={-30}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker23}
        top={1350}
        left={-10}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker24}
        top={1590}
        left={180}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker25}
        top={1130}
        left={20}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker26}
        top={1040}
        left={190}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker27}
        top={940}
        left={170}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker28}
        top={1300}
        left={100}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker29}
        top={1410}
        left={150}
        onDragStart={handleDragStart}
      />
      <Sticker
        top={1450}
        left={-10}
        src={sticker30}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker31}
        top={1620}
        left={80}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker32}
        top={1340}
        left={270}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker33}
        top={1020}
        left={20}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker34}
        top={1120}
        left={-10}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker35}
        top={1260}
        left={0}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker36}
        top={1250}
        left={220}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker37}
        top={1320}
        left={350}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker38}
        top={1440}
        left={130}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker39}
        top={1080}
        left={150}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker40}
        top={1240}
        left={290}
        onDragStart={handleDragStart}
      />
      <Sticker
        src={sticker41}
        top={1420}
        left={800}
        onDragStart={handleDragStart}
      />
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        ref={posterImageRef}
        className={classes["stage-container"]}
      >
        <Stage
          width={430}
          height={550}
          ref={stageRef}
        >
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
