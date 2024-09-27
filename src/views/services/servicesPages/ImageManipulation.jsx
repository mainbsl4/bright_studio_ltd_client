import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704369/Zen_Bl%C3%A5b%C3%A4r_3_ikhy7l.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704369/Zen_Bl%C3%A5b%C3%A4r_3_a5r3tb.jpg";

export default function ImageManipulation() {
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
        <h2>Image Manipulation</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Image manipulation is a kind of art which is actually altering a photo
          for expressing the necessity of a person.This is another process that
          is related to the photo editing.This is applied for artistic reason
          and also for deceitfulness.This also helps in resizing photos.There
          are different applications for doing this and adobe photoshop is very
          popular among them.
        </p>
      </div>
    </div>
  );
}
