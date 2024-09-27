import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";
const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704620/IMG_2993_rk5pwo.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704626/IMG_2993_v7yqpk.jpg";

export default function RealEstatePhotoEditingRetouchingServices() {
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
        <h2>Real Estate Photo Editing & Retouching Services</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <div className=" text-justify lg:px-3">
          {/* {TextBody} */}
          <p>
            Bright Studio Ltd is now the number one real estate photo editing
            service with 100+ satisfied customers worldwide. We have been
            editing real estate photos for 5 years has assisted people in
            buying, selling, or renting buildings through professionally edited
            photos. Let us help you create a dream home with the help of real
            estate retouching.{" "}
          </p>
          <b>
            {" "}
            <mark>
              <i>DAY TO DUSK - FROM €4 PER PHOTO</i>
            </mark>{" "}
          </b>
          <p>
            REGARDLESS OF THE TIME WHEN YOU TOOK YOUR REAL ESTATE PHOTOS, WE CAN
            MAKE THEM LOOK AS IF THEY WERE TAKEN IN THE EARLY MORNING, MIDDAY,
            OR LATE IN THE EVENING. BRIGHTNESS AND CONTRAST ADJUSTMENT Incorrect
            contrast and brightness settings can ruin even the most elaborate
            interior design composition. We can take care of such issues and
            give your property images a well-balanced look.
          </p>
          <b>How Does It Work</b>
          <ul>
            <li>Upload real estate photos</li>
            <li>Write recommendations</li>
            <li>Submit for revision if necessary</li>
            <li>Get your photos back</li>
          </ul>
          <p>
            Having received thousands of requests from realtors and
            photographers, we launched our own new real estate photo editing
            services. Either expert or beginning photographers can use it.
          </p>
          <p>
            We will take care of your property photos in a fast and efficient
            way. Our services are a straight way to professional property
            photography.
          </p>
        </div>
      </div>
    </div>
  );
}
