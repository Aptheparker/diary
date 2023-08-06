// imports
import { useState } from "react";


import classes from "./ContentPage.module.css";

const ContentPage = ({ contentImageRef }) => {
  const [placeholdersVisible, setPlaceholdersVisible] = useState({
    textbox1: true,
    textbox2: true,
    textbox3: true,
  });

  const handleFocus = (textbox) => {
    setPlaceholdersVisible((prevPlaceholders) => ({
      ...prevPlaceholders,
      [textbox]: false,
    }));
  };

  const handleBlur = (textbox, e) => {
    if (!e.target.textContent) {
      setPlaceholdersVisible((prevPlaceholders) => ({
        ...prevPlaceholders,
        [textbox]: true,
      }));
    }
  };

  return (
    <div className={classes["content-background"]}>
      <div className={classes["content-container"]} ref={contentImageRef}>
        <div
          className={classes["textbox1"]}
          contentEditable
          onFocus={() => handleFocus("textbox1")}
          onBlur={(e) => handleBlur("textbox1", e)}
        >
          {placeholdersVisible.textbox1 && (
            <div>내용을 입력해주세요</div>
          )}
        </div>
        <div className={classes["row1"]}>
        <div
          className={classes["textbox2"]}
          contentEditable
          onFocus={() => handleFocus("textbox2")}
          onBlur={(e) => handleBlur("textbox2", e)}
        >
          {placeholdersVisible.textbox2 && (
            <div>내용을 입력해주세요</div>
          )}
        </div>
          <div className={classes["textbox2"]} contentEditable />
        </div>
        <div className={classes["row2"]}>
        <div
          className={classes["textbox3"]}
          contentEditable
          onFocus={() => handleFocus("textbox3")}
          onBlur={(e) => handleBlur("textbox3", e)}
        >
          {placeholdersVisible.textbox3 && (
            <div>내용을 입력해주세요</div>
          )}
        </div>
          <div className={classes["textbox3"]} contentEditable />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
