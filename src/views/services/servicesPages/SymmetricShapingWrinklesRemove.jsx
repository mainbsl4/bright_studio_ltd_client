import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704536/M-4_Port_nyhppk.jpg";

const afterImage =
  "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704535/M-4_Port_tq5drd.jpg";
export default function SymmetricShapingWrinklesRemove() {
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
        <h2>Symmetric Shaping & Wrinkles Remove</h2>
        {/* <p className=" text-justify lg:px-3">
      {TextBody}
    </p> */}
        <div className=" text-justify lg:px-3">
          {/* {TextBody} */}
          <p>Bright Studio Ltd is known among customers as a business that is aware of the strategy needed to produce a high-quality Symmetric Shaping & Wrinkles Remove for clothing.
          <br />
Anyone who needs Symmetric Shaping & Wrinkles Remove services can get them from us. The following list includes some of the industries that frequently need Symmetric Shaping & Wrinkles Remove services.
</p>
<b >GARMENTS INDUSTRY:</b>
<p>Take our ghost mannequin if you work in the garment industry.</p>
<b>APPAREL INDUSTRY:</b>
<p>Taking our ghost mannequin is a good idea if you work in the apparel industry</p>
<b>ECOMMERCE INDUSTRIES:</b>
<p>Service for neck joints is crucial for e-commerce sectors. Therefore, if you run an online store or work there, you must perform a lot of editing every day. Many of the photographs you edit on a daily basis will need Symmetric Shaping & Wrinkles Remove services</p>
<b> PHOTO EDITING AGENCY:</b>
<p>On a daily basis, several photo editing companies use our services. All forms of photo editing, including Symmetric Shaping & Wrinkles Remove correction, are required.</p>
<b> PROFESSIONAL PHOTO EDITOR:</b>
<p>Professional photo editors will undoubtedly want Symmetric Shaping & Wrinkles Remove services for a variety of reasons. Services for the neck joints can save a ton of time and effort.</p>
<b> PROFESSIONAL PHOTOGRAPHERS :</b>
<p>A professional photographer requires absolute perfection. They are unable to offer any justifications. A professional photographer must offer Symmetric Shaping & Wrinkles Remove or ghost mannequin service if they want to deliver exceptional customer service and satisfy clients. Therefore, they can undoubtedly attempt our Symmetric Shaping & Wrinkles Remove service.</p>
        </div>
      </div>
    </div>
  );
}
