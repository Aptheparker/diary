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

  const handleExportCanvas = () => {
    // Create a temporary canvas element
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = window.innerWidth;
    tempCanvas.height = window.innerHeight;
    const tempContext = tempCanvas.getContext("2d");

    // Draw the stage onto the temporary canvas
    tempContext.drawImage(stageRef.current.getStage().toCanvas(), 0, 0);

    // Create a temporary link element to download the PNG file
    const link = document.createElement("a");
    link.href = tempCanvas.toDataURL();
    link.download = "canvas.png";
    link.click();
  };

  return (
    <div className={classes["poster-background"]}>
      <Sticker src={sticker1} onDragStart={handleDragStart} />
      <Sticker src={sticker2} onDragStart={handleDragStart} />
      <Sticker src={sticker3} onDragStart={handleDragStart} />
      <div
        className={classes["canvas-container"]}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
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
        <button className={classes["export-button"]} onClick={handleExportCanvas}>
          Export Canvas
        </button>
      </div>
    </div>
  );
};

export default PosterPage;
