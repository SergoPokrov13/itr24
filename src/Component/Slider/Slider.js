import SlideMain from "./SlideMain/SlideMain";
import SlideBitrix from "./SlideBitrix/SlideBitrix";
import SlideCompany from "./SlideCompany/SlideCompany";
import SlideContact from "./SlideContact/SlideContact";

function Slider() {
    return (
      <div className="Slider">
        <SlideMain/>
        <SlideBitrix/>
        <SlideCompany/>
        <SlideContact/>
      </div>
    );
  }
  
  export default Slider;