import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704361/con_KMC5976_uqmxgf.jpg";
const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704359/con_KMC5976_rykfz8.jpg";

export default function JewelryRetouching() {
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
        <h2>Jewelry Retouching</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Professionally retouching jewelry photos attract the most potential
          buyers and present precious gemstones in the most shining and
          appealing way. After being retouched by Photoshop, various jewelry
          pieces including rings, earrings, necklaces, etc. gleam.
        </p>
      </div>
    </div>
  );
}
