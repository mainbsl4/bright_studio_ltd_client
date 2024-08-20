import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";
// import BeforeAfterSlider from "react-before-after-slider";
// import BeforeAfterSlider from "react-before-after-slider";

// import image from "../../assets/images/Cellider_Image/Before/Brightstudioltd.com.1.svg";


// eslint-disable-next-line react/prop-types
export default function BeforeAfterForHome({before, after, textHeading, TextBody}) {
  // const before = image;
  // const after =
  //   "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";
  return (
       <div className="lg:flex lg:justify-around mt-10">
        <div className=" lg:w-4/12 border rounded shadow">
          <ReactCompareImage
            leftImage={before}
            rightImage={after}
            aspectRatio="wider"
          />
        </div>
        <div className=" lg:w-5/12">
          <h2>{textHeading}</h2>
          <p className=" text-justify lg:px-3">
            {TextBody}
          </p>
        </div>
      </div>
  )
}
