/* eslint-disable react/no-unescaped-entities */
import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704362/Untitled-1_0020_PTX_4782_h5jhew.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704359/Untitled-1_0020_PTX_4782_ihjvfw.jpg";

export default function D360PackshotRetouching() {
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
        <h2>3D 360° Packshot Retouching</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <div className=" text-justify lg:px-3">
          {/* {TextBody} */}
          <p>
            Professional photo restoration is another area of expertise at
            Bright studio ltd. Our Photo Restoration Service is also our most
            popular level. We restore any type of photograph that has been
            harmed by fire, light, water, mold, animals, or kids. Just give us
            the area of the image that matches the original. Our specialists are
            highly regarded for their work in advanced photo restoration.
            Unwavering excellent quality and service are the cornerstones of our
            productivity. Our devoted and effective team restores photos for
            individuals, organizations, and outstanding event photos using the
            most cutting-edge hardware & software. We can give you a duplicate
            of your damaged image that appears to be the original using digital
            technology, professionalism, experience, and background in fine art.
            You won’t notice even the slightest difference from the original
            image thanks to the excellent skill of our team for digital photo
            restoration service.
            <br />
            For commercial photographs, we digitally alter or restore vintage
            photos. We can also restore damaged photos to their original state
            by using the original photographs that were previously captured.
            <br />
            The computer has no magic but artists use a computer as the artist's
            tool. We employ the kind of artists who can envision your needs.
            When you compare it to other expenses, especially those related to a
            memorable event, you will see that it is more affordable than you
            initially thought. Your enjoyable time can be forgotten forever,
            however, these pictures can help you relive that happy moment.
            <br />
            Simply upload these types of images to get an estimate of the cost.
            Some photos contain special recollections that are the only photos
            that have survived for many years in your family but are in poor
            condition. We'll send you the updated pictures back.
          </p>
        </div>
      </div>
    </div>
  );
}
