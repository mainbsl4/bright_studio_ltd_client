import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704371/230504_Miriambella_Ecom_Style_Five_0179_hu2fnk.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704368/230504_Miriambella_Ecom_Style_Five_0179_nol7qy.jpg";
export default function ReflectionCreation() {
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
        <h2>Reflection Creation</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}A proper reflection creation service is said to be
          done only when proper layer is made, image transforming and flipping
          is clearly done, gradient is properly implemented, correct opacity is
          maintained, and the shape remained exact. Our CPF Photoshop image
          reflection creation team is high above the industry standard and
          committed to output you the most précised images your business needs
        </p>
      </div>
    </div>
  );
}
