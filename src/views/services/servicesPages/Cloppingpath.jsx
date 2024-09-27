import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704359/203098_kd6x1x.jpg";
const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704360/203098_qhrhzh.jpg";

export default function Cloppingpath() {
  return (
    <div className="container mx-auto lg:flex lg:justify-around mt-10">
      <div className=" lg:w-4/12 border rounded shadow">
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          aspectRatio="wider"
        />
      </div>
      <div className=" lg:w-5/12">
        {/* <h2>{textHeading}</h2> */}
        <h2>Clipping Path</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Clipping Paths are used to outline objects from the background of an
          image. These objects are offered a different background. A clipping
          Path is a vector path which allows part of an image to show while
          hiding the rest effectively rendering part of the image transparent.
          Generally, it means a hardedged vector masking technique that improves
          the desired areas of the image and covers the unwanted image elements.
        </p>
      </div>
    </div>
  );
}
