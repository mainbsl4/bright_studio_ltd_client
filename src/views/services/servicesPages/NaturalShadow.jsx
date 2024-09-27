import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704365/DSC_0014_xjmigi.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704365/DSC_0014_wqhnft.jpg";
export default function NaturalShadow() {
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
        <h2>Natural Shadow</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Shadowing an image can double the beauty of an image and give natural
          essence to it, that’s why you’ll find shadowing very common and
          muchpracticed image manipulation technique. In ecommerce site
          shadowing is needed so frequently to bring natural mood to the
          products. We basically deal with two types of image shadowingdrop
          shadowing and reflection shadowing and for both of the services we
          have costeffective packages for you. And we do say itwe’re definitely
          the best provider of this service. Why? Because our highly
          professional art directors use the latest software’s for shadowing the
          images our clients give to us.
        </p>
      </div>
    </div>
  );
}
