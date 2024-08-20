const data = [
  {
    "id": 1,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540532/9_w1koml.jpg",
  },
  {
    "id": 2,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540529/70_cnj2vq.jpg",
  },
  {
    "id": 3,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540529/71_byu6aw.jpg",
  },
  {
    "id": 4,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540527/65_bymtc2.jpg",
  },
  {
    "id": 5,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540527/69_gajfjs.jpg",
  },
  {
    "id": 6,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540527/68_omrwpq.jpg",
  },
  {
    "id": 7,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540526/64_fw1mvw.jpg",
  },
  {
    "id": 8,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540524/62_rg5pwa.jpg",
  },
  {
    "id": 9,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540519/50_po4dmv.jpg",
  },
  {
    "id": 10,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540511/34_wryael.jpg",
  },
  {
    "id": 11,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540518/48_zdphh4.jpg",
  },
  {
    "id": 12,
    "imageSrc" : "https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540515/40_bnxo5h.jpg",
  }
]
export default function ImageGallery() {
  return (
    <div className="lg:container lg:mx-auto mt-10">
      <div className="lg:px-12 py-5 flex justify-center items-center flex-col">
        <p>WE ARE SPECIALIZED IN HIGH-QUALITY E-COMMERCE IMAGE EDITING SERVICES</p>
        <h3>
        Our Recent Works
        </h3>
      </div>
      <div className="  grid grid-cols-2 md:grid-cols-4 gap-4">
        
          {
            data.map((data, index) => (
              <div className="grid gap-4" key={index}>
              <div >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={data.imageSrc}
                  alt=""
                />
              </div>
      </div>

            ))
          }
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div> */}
        </div>
    </div>
  );
}
