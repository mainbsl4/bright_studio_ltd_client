import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704366/23RG029643_bxbmqg.jpg";
const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704365/23RG029643_kyu0sw.jpg";

export default function ColorCorrection() {
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
        <h2>Color Correction</h2>
        {/* <p className=" text-justify lg:px-3">
        {TextBody}
      </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          Making color correction in Photoshop is to understand how color works
          with digital images. For doing this we have to make creative images
          work with the adjustments in several scenarios. It has to be
          remembered that we have to fix overall tonal and color problems in
          images. The main purpose of Adobe Photoshop is to function as a
          digital darkroom in which images can be modified, corrected and
          enhanced. Photoshop color correction service includes using of
          channels and histograms for identifying problem areas. Applying
          adjustments like Curves and White Balance. Making edits which changes
          the entire effect of the image. New user’s faces a difficult time
          while correcting color or enhancing images. The main purpose of color
          correction is to make the image look better. For color correction need
          to create multiple clipping path for better color separation. In most
          cases they move far away from the target while fixing the images.
          Given below are some guidelines to get started
        </p>
      </div>
    </div>
  );
}
