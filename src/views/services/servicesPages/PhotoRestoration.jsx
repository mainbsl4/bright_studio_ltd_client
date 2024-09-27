import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704373/IMG_2495_qyvhlw.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704373/IMG_2495_rfcrs5.jpg";

export default function PhotoRestoration() {
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
        <h2>Photo Restoration</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <div className=" text-justify lg:px-3">
          {/* {TextBody} */}
          <p>
            360-item photography can undoubtedly result in increased profits and
            advantages for your e-commerce organization when the aforementioned
            factors are taken into account. It would be best to board at this
            point.
            <br />
            So if you need 360-degree image editing, Studio Click House can
            assist you in providing it. Our skilled designers are knowledgeable
            in all 360-degree image editing techniques. We charge a very low
            price for this service as well.
          </p>
          <b>OUR 360-DEGREE IMAGE EDITING SERVICES INCLUDE:</b>
          <ul>
            <li>Photo stitching services.</li>
            <li>HDR panorama enhancement.</li>
            <li> 360 spherical panoramic views.</li>
            <li>Inner/Outer sphere panorama.</li>
            <li>Inner/Outer cylinder panoramic view.</li>
            <li>360-degree virtual tour services.</li>
            <li>Real estate panorama stitching services.</li>
            <li>Image blending services. </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
