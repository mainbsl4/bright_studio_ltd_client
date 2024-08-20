import ReactCompareImage from "react-compare-image";
import "../../../assets/css/beforeafter.css";

const beforeImage = 'https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704369/Zen_Bl%C3%A5b%C3%A4r_3_ikhy7l.jpg'

const afterImage = 'https://res.cloudinary.com/dqkd7vayw/image/upload/v1722704369/Zen_Bl%C3%A5b%C3%A4r_3_a5r3tb.jpg'


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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          nihil, facilis dicta voluptates doloribus accusantium ad modi iusto
          expedita repellendus voluptate vel, corrupti temporibus, cum quae
          saepe consequuntur esse? Ut reiciendis inventore quos similique!
          Laboriosam nulla ab obcaecati non molestias, accusantium atque beatae
          officiis adipisci consequatur cum voluptatum alias, quidem voluptates
          omnis praesentium error nostrum saepe soluta tempore voluptatem
          dolorem ut. Nihil doloremque repudiandae obcaecati reprehenderit
          assumenda quia ut modi delectus exercitationem dolores aspernatur,
          velit qui vel ratione aliquid molestiae libero impedit ad blanditiis
          quas laboriosam sit repellendus. Laboriosam inventore numquam mollitia
          fugiat tenetur quasi nemo natus sunt illo quas!
        </p>
      </div>
    </div>
  )
}
