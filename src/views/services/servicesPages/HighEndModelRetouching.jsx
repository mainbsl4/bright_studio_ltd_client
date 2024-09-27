import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704363/Best_Miriam_Rosa41121-1_ln768h.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704362/Best_Miriam_Rosa41121-1_spq3ki.jpg";

export default function HighEndModelRetouching() {
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
        <h2>High-End Model Retouching</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <p className=" text-justify lg:px-3">
          {/* {TextBody} */}
          when your best shot image needs extra appeal, High End Photo
          Retouching becomes crucial. Wedding photographs, ads in magazines,
          photos for fashion publications or luxury magazines, real estate
          photographs, and a lot of other photographs require this high-end
          retouching service. During regular retouching, you lose a lot of
          details in pixels, but in high end portrait and beauty retouching, you
          may need non-destructive photo retouching to get a more natural
          looking photos. High End Photo Retouching is the most advanced type of
          retouching technique that involves analyzing, contouring, removing
          imperfections, smoothing textures, dodging and burning, and many more.{" "}
          <br />
          The traces of retouching in the final output is relatively
          untraceable. In most cases, it is performed with Pen Tablets (Wacom),
          sophisticated imaging technology, advanced Photoshop tools, and most
          of all precious attention, effort, and time of a professional
          retoucher. Such high end service requires sweat, but has sweet return.
          One single retouching work requires more than an hour of very
          attentive and detailed work. That’s why our professional high end
          retouching service is one of our most expensive services. However, as
          our base price is very competitive, therefore we can provide the best
          quality at the best price in the market. <br />
          The biggest challenge for a photographer, is spending time, attention,
          and energy on retouching images. But, it is always best to outsource
          your time, attention, and energy to a company that can ensure peace of
          mind by providing better retouching solution with sophisticated
          retouching techniques and technologies. Are we that solution? Well,
          you don’t have to believe our words or the sample pictures below. You
          be the judge. Send us images for a free trial.
        </p>
      </div>
    </div>
  );
}
