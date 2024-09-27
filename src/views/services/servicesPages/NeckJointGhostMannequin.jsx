import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704370/Jobman_9_Front_pbwpzl.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704370/Jobman_9_Front_ruooiu.jpg";
export default function NeckJointGhostMannequin() {
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
        <h2>Neck Joint Ghost Mannequin</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Ghost mannequin is mainly applicable on garments and is commonly used
          in garment industry. Ideally there are two or three parts which must
          be combined. There is the front part, the inner part and the back
          part. The inner part can be created by combining the front part and
          the back part. This is what will enable you have a complete image.
          Neck join services may include image editing of garments such as the
          sweaters, tshirts, and shirts. If you have the front part and the back
          part, it is possible to combine the two parts to create a real object
          using the neck joint technology. If you sell garments, it is possible
          to use the neck joint technology to get images you can use on your
          website.
        </p>
      </div>
    </div>
  );
}
