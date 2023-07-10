import { useRef, useState } from "react";
import { Stage, Layer } from "react-konva";
import { URLImage, Sticker } from "../../components/Sticker/Sticker";
import classes from "./PosterPage.module.css";
import sticker1 from "../../assets/images/15.png";
import sticker2 from "../../assets/images/1.png";
import sticker3 from "../../assets/images/2.png";

const PosterPage = () => {
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

  return (
    <div className={classes["poster-background"]}>
      <Sticker src={sticker1} onDragStart={handleDragStart} />
      <Sticker src={sticker2} onDragStart={handleDragStart} />
      <Sticker src={sticker3} onDragStart={handleDragStart} />
      <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image) => (
              <URLImage
                key={image.src}
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
