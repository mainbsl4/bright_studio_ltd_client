import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704359/6C4A7740_hjq03w.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704363/6C4A7740_xzbbg7.jpg";

export default function ProductPhotoRetouching() {
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
        <h2>Product Photo Retouching</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          The photos those have faded and you want to make it looks good as the
          first time the photos were taken. This is the great idea since the old
          photos are commonly faded, darkened and probably discolored with age
          too. By using latest software, we will help you to repair and restore
          your precious photographs easily. Photographs are a great way to keep
          those special memories, wedding, anniversary, birth, and family or
          friends reunion and many others. Sometimes however, those precious
          memories are damaged or degrade over time due to dereliction of
          photos. Earlier, when there were no restoration services available,
          the changes were made to the original photograph and even till today
          it’s the preferred method for preserving old, historical photographs.
          But nowadays, it’s easier to work on the restoration part, as the
          changes are made to the copy of the original photo.
        </p>
      </div>
    </div>
  );
}
