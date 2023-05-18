import { Carousel } from "antd";
import "../../App.css";
import { Image } from "antd";

const contentStyle = {
  height: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HeaderSection = () => (
  <>
    
    <div className="tag-container">
        <div className="tag-one">
            <div className='tag-title'>
            TRACK ACTIVITIES, BOOST PERFORMANCE 
            </div>
        </div>
        <div className="tag-two">
            <div className='tag-title'>
            RIDING ,HIKING ,WALKING SWIMING ,BICYCLING
            </div>
        </div>
    </div>
    <Carousel autoplay dotPosition="right" dot="true">
      <div className='flex'>
        <Image preview={false} height={800} width='100vw' src="./images/backgroundHeader.png" />
        <div className="text-container">
        <p>SOMETHING LIKE SOMETHING YOU NEED</p>
        <p>TAKE ACTION</p>
        <p>TODAY !</p>
        {/* <button className="w-[371px] h-[82px] z-[1]">Get Ready</button> */}
        </div>
      </div>
    </Carousel>
  </>
);
export default HeaderSection;
