import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704578/Lundhags_5658_zwajmo.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704581/Lundhags_5658_dkquu2.jpg";

export default function ModelPhotoLiquifyRetouching() {
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
        <h2>Model Photo Liquify & Retouching</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          High-End Model Photo Liquefy Retouch is an excellent technique of
          image manipulation that helps you to touch specific undesirable
          factors into your image. It gives your Model images a fresh, nice, and
          creative look. Photoshop Retouching Service provides us with some
          benefits. Removing unwanted objects from a photo, Adding a suitable
          object to a photo, Making a creative look of the photo frame,
          restoring the images for the future, and processing image manipulation
        </p>
      </div>
    </div>
  );
}
