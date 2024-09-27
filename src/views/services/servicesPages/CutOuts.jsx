import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704362/Untitled-1_0020_PTX_4782_h5jhew.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704359/Untitled-1_0020_PTX_4782_ihjvfw.jpg";

export default function CutOuts() {
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
        <h2>CUT OUTS</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Background removal in photo editing is the process through which an
          object is isolated from it’s background. This technique is very
          effective in removing the main object from that which surrounds it and
          is based on the clipping path. Remove background from image basically
          changes the whole image. Background removal is a frequently used image
          manipulation technique, used to erase the unwanted backdrop or object
          from the image. Think about you snap a shot of a product where a
          number of other substances exit what you never mean to show;
          especially this happens when you’re doing marketing for your product
          in an ecommerce site. Bright Studio Ltd have experienced designer for
          removing background.
        </p>
      </div>
    </div>
  );
}
