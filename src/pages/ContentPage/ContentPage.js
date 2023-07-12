// css
import classes from "./ContentPage.module.css";

// components
import box1sticker1 from './textBox1/1.png';
import box1sticker2 from './textBox1/2.png';
import box1sticker3 from './textBox1/3.png';
import box2sticker1 from './textBox2/1.png';
import box2sticker2 from './textBox2/2.png';

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
