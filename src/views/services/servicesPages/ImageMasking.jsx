import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704365/23RG029553_exkl9z.jpg";
const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704364/23RG029553_nnftug.jpg";

export default function ImageMasking() {
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
        <h2>Image Masking</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Clipping Mask by Photoshop requires brilliancy in techniques and
          skills in precise image masking tasks like Erasing and Regular
          Masking, Channel Masking, Color Masking, Color Masking, Layer Masking,
          Transparency Masking and Alpha Masking. Providing accurate masking to
          any kind of complex images are our expertise and that is why we are
          confidently serving all the industry leaders like Print Media,
          Advertising Agency, Press, Store Chains, Franchise Companies, Online
          Retailers and so on. Our experienced and world-class designers ensure
          precise isolation of images with subtle edges along with covering all
          the aspects of Photoshop image masking services. Our photo masking
          technology will help you to reduce your overall cost by processing
          bulk amount of photos at a time at precisely and within your lowest
          budget ever.
        </p>
      </div>
    </div>
  );
}
