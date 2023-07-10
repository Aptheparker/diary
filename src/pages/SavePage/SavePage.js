import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import classes from "./SavePage.module.css";

const SavePage = ({ posterImageRef, contentImageRef }) => {
  const [posterSrc, setPosterSrc] = useState("");
  const [contentSrc, setContentSrc] = useState("");

  const exportAsPng = () => {
    // Perform export logic here
  };

  useEffect(() => {
    const updateImages = async () => {
      if (posterImageRef.current) {
        const posterCanvas = await html2canvas(posterImageRef.current);
        setPosterSrc(posterCanvas.toDataURL());
      }

      if (contentImageRef.current) {
        const contentCanvas = await html2canvas(contentImageRef.current);
        setContentSrc(contentCanvas.toDataURL());
      }
    };

    updateImages();
  }, [posterImageRef, contentImageRef]);

  return (
    <div className={classes["save-background"]}>
      <div className={classes["container"]}>
        <div id="poster" className={classes["poster"]}>
          {posterSrc && <img src={posterSrc} alt="Poster" />}
        </div>
        <div id="content" className={classes["content"]}>
          {contentSrc && <img src={contentSrc} alt="Content" />}
        </div>
      </div>
      <button onClick={exportAsPng}>Export as PNG</button>
    </div>
  );
};

export default SavePage;
