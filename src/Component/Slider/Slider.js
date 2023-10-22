import SlideMain from "./SlideMain/SlideMain";
import SlideBitrix from "./SlideBitrix/SlideBitrix";
import SlideCompany from "./SlideCompany/SlideCompany";

function Slider() {
    return (
      <div className="Slider">
        <SlideMain/>
        <SlideBitrix/>
        <SlideCompany/>
      </div>
    );
  }
  
  export default Slider;