/* eslint-disable react/no-unescaped-entities */
import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704371/Vector_Work_1_wo7xnt.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704372/Vector_Work_1_s0w3zq.jpg";
export default function ServRastertoVectorConversionices() {
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
        <h2>ServRaster to Vector Conversionices</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Raster to Vector conversion means to convert raster images to vector
          images. But what's significant is to know, what precisely is raster
          and vector, and why this conversion is so much required after. Images
          are of two types Raster and Vector. Normally, for any small sized
          image it doesn't make much dissimilarity if the type is raster but if
          same image is enlarged without converting from raster to vector it
          will give out an unclear picture. The reason behind this is, with
          raster images are made up of dots which when enlarged gets mixed up.
          Whereas, with vector images are made of lines, curves etc. and hence
          when it is enlarged these doesn't mix up; they just increase in size
          keeping the image as it is. Raster to vector is adapted to vectorize
          graphics for resizing and better usage, and there is usually no change
          in actualization affianced in this process. Raster to vector
          conversions is acclimated on photographs in adjustment to change their
          actualization into an exhausted or corrective one. One of the
          functions of the raster to vector conversion is that it can
          accommodate a photograph into a geometric design. For that reason it
          is logically used for a lot of motives for example computer aided
          engineering, finite element analysis, computer aided manufacturing,
          numerical control, photo realistic rendering, document management and
          finally raster to vector conversions. Another worth mentioning usage
          of computer aided design is that it can be used for the accurate
          creation of photo simulations in style.
        </p>
      </div>
    </div>
  );
}
