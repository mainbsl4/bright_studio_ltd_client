import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704372/000709544FW20_4327_C_COMBO_S1X1_lfpron.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704371/000709544FW20_4327_C_COMBO_S1X1_twcyvt.jpg";

export default function MultipleClippingPath() {
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
        <h2>Multiple ClippingPath</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Multi Clipping Path is used for those images that require isolation of
          parts. It is done to separate some parts of the image to later change
          it in Photoshop. We are reliable and skilled clipping path service
          provider from Bangladesh that provide image background removal
          services with perfection. Do not take the pressures of editing or
          clipping images all by yourself. We are here to give you the best
          multi clipping path services with utmost care. Let us omit those
          improper outlining made on the product photographs and save yourself
          from getting adverse effect on your growth graph. Our way of
          presenting your image is out of ordinary as we can give clarity to
          your photographs by focusing on the object you need to market.
        </p>
      </div>
    </div>
  );
}
