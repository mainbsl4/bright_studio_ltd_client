import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1727410650/100072963_w89k2b.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1727410649/100072963_acm9b6.jpg";

export default function PattanChinge() {
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
        <h2>Pattan Chinge</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Ensure your product and garments matches perfectly with a swatch or
          reference image. Swatches and reference Images can be easily uploaded
          into the bright studio ltd platform to make texture replacement you
          will reduce product and garments returns when a product does not Mach
          the Texture seen in the product image of the online store.
        </p>
      </div>
    </div>
  );
}
