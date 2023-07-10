import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import classes from "./SavePage.module.css";

// button images
import saveButton from "./saveButton.png"
import printButton from "./printButton.png"

const SavePage = ({ posterImageRef, contentImageRef }) => {
  const [posterSrc, setPosterSrc] = useState("");
  const [contentSrc, setContentSrc] = useState("");
  const containerRef = useRef(null);

  const saveAsFinal = () => {
    if (posterImageRef.current) {
      html2canvas(posterImageRef.current)
        .then((posterCanvas) => {
          setPosterSrc(posterCanvas.toDataURL());
        })
        .catch((error) => {
          console.error("Error generating poster canvas:", error);
        });
    }

    if (contentImageRef.current) {
      html2canvas(contentImageRef.current)
        .then((contentCanvas) => {
          setContentSrc(contentCanvas.toDataURL());
        })
        .catch((error) => {
          console.error("Error generating content canvas:", error);
        });
    }
  };

  useEffect(() => {
    const updateImages = async () => {
      if (posterImageRef.current) {
        try {
          const posterCanvas = await html2canvas(posterImageRef.current);
          setPosterSrc(posterCanvas.toDataURL());
        } catch (error) {
          console.error("Error generating poster canvas:", error);
        }
      }

      if (contentImageRef.current) {
        try {
          const contentCanvas = await html2canvas(contentImageRef.current);
          setContentSrc(contentCanvas.toDataURL());
        } catch (error) {
          console.error("Error generating content canvas:", error);
        }
      }
    };

    updateImages();
  }, [posterImageRef.current, contentImageRef.current]);

  const exportAsPng = () => {
    if (containerRef.current) {
      html2canvas(containerRef.current).then((canvas) => {
        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "my-diary.png";
        downloadLink.click();
      });
    }
  };

  return (
    <div className={classes["save-background"]}>
      <div className={classes["buttons"]}>
      <img src={saveButton} alt="Save" onClick={saveAsFinal} />
        <img src={printButton} alt="Export as PNG" onClick={exportAsPng} />
      </div>
      <div className={classes["container"]} ref={containerRef}>
        <div id="poster" className={classes["poster"]}>
          {posterSrc && <img src={posterSrc} alt="Poster" />}
        </div>
        <div id="content" className={classes["content"]}>
          {contentSrc && <img src={contentSrc} alt="Content" />}
        </div>
      </div>
    </div>
  );
};

export default SavePage;
