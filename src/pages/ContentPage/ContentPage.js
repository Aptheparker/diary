// css
import classes from "./ContentPage.module.css";

const ContentPage = ({ contentImageRef }) => {
  return (
    <div className={classes["content-background"]}>
      <div className={classes["content-container"]} ref={contentImageRef}>
        <textarea className={classes["textbox1"]} placeholder="내용을 입력해주세요"></textarea>
        <div className={classes["row1"]}>
          <textarea className={classes["textbox2"]} placeholder="내용을 입력해주세요" />
          <textarea className={classes["textbox2"]} />
        </div>
        <div className={classes["row2"]}>
          <textarea className={classes["textbox3"]} placeholder="내용을 입력해주세요" />
          <textarea className={classes["textbox3"]} />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
