import { Icon } from "@iconify/react/dist/iconify.js";

export default function STUDIOCLICK() {
  return (
    <div className="container mx-auto my-10">
      <div className="lg:px-12 py-5 flex justify-center items-center flex-col uppercase">
        <p>
          Studio Click House is one of the best image background remove service
          provider.
        </p>
        <h3>
          SO IF YOU HAVE ANY KIND OF IMAGE BACKGROUND REMOVAL WORK, WE ARE HERE
          FOR YOU !!
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 justify-center">
        <div className="card max-w-sm p-6">
          <div className="bg flex flex-col justify-center items-center">
            <Icon
              icon="material-symbols-light:mail"
              className=" w-[60px] h-[60px] p-2 text-4xl text-blue-400 border-gray-300 border-2 rounded-full"
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                CONTACT US
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 ">
              We will reply you within 15 minutes !
            </p>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card  max-w-sm p-6">
          <div className="bg flex flex-col justify-center items-center">
          <Icon
            icon="gg:quote-o"
            className=" w-[60px] h-[60px] p-2 text-4xl text-blue-400 border-gray-300 border-2 rounded-full"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              GET A QUOTE
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 ">
            We will reply you within 15 minutes !
          </p>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card  max-w-sm p-6">
        <div className="bg flex flex-col justify-center items-center">
        <Icon
            icon="arcticons:ad-free"
            className=" w-[60px] h-[60px] p-2 text-4xl text-blue-400 border-gray-300 border-2 rounded-full"
          />

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              GET A FREE TRIAL
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 ">
            We are waiting for your Free Trial Images !
          </p>
          </div>          <div className="blob"></div>
        </div>
        {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <Icon
            icon="material-symbols-light:mail"
            className="text-4xl text-blue-400 border-gray-300 border-2 rounded"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              CONTACT US
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 ">
            We will reply you within 15 minutes !
          </p>
        </div> */}
        {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <Icon
            icon="gg:quote-o"
            className="text-4xl text-blue-400 border-gray-300 border-2 rounded"
          />

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              GET A QUOTE
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 ">
            We will reply you within 15 minutes !
          </p>
        </div> */}
        {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <Icon
            icon="arcticons:ad-free"
            className="text-4xl text-blue-400 border-gray-300 border-2 rounded"
          />

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              GET A FREE TRIAL
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 ">
            We are waiting for your Free Trial Images !
          </p>
        </div> */}
      </div>
    </div>
  );
}
