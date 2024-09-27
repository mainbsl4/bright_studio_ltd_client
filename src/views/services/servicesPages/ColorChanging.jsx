import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704367/racquet_bumper_cream_Daino_281_dwkhdr.jpg";
const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704367/racquet_bumper_cream_Daino_281_ixwcxs.jpg";

export default function ColorChanging() {
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
        <h2>Color Changing</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          The majority of wedding celebrations are now organized by event
          management companies. One of the most crucial aspects of the events is
          photography. The event is more memorable and the clients are most
          satisfied with good photos. However, the lighting situation for
          photography is frequently inaccurate. They must therefore alter their
          photographs by using a color Changing service. E-commerce businesses
          require color- Changing services for their images. Alibaba, Amazon,
          Shopify eBay, and Etsyetcare all required perfect catchy pictures to
          impress their buyers.
        </p>
      </div>
    </div>
  );
}
