import { Button } from "@mui/material";

export default function PRICEEXAMPLES() {
  return (
    <div className="container mx-auto mt-1">
      <div className="lg:px-12 py-5 flex justify-center items-center flex-col">
        <h3>PRICE EXAMPLES</h3>
        <p>
        Please note that the prices below are for guidance only. For all clients, we calculate a price per image based on the specific job task.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 justify-center">
        <div className="max-w-sm p-6 bg-white border border-[rgb(204_204_204)]  rounded-lg shadow ">
          <svg
            className="w-7 h-7 text-gray-500  mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              CUT-OUTS
            </h5>
          </a>
          <p>
            FROM EUR
            <span className="border px-2 pt-1 text-2xl bg-black text-white rounded-md">
              0.50
            </span>{" "}
            / IMG
          </p>
          <p className="mb-3 font-normal text-gray-500 mt-3 ">
            Everything from simple cut-outs of products to advanced clipping
            tasks
          </p>
          {/* <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <svg
            className="w-7 h-7 text-gray-500  mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
            Retouching
            </h5>
          </a>
          <p>
            FROM EUR{" "}
            <span className="border px-2 pt-1 text-2xl bg-black text-white rounded-md">
              1.00
            </span>{" "}
            / IMG
          </p>
          <p className="mb-3 font-normal text-gray-500 mt-3 ">
          Retouching, colour correction, contrast and brightness make your images crisp, detailed and harmonious
          </p>
          {/* <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <svg
            className="w-7 h-7 text-gray-500  mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
            High-end Retouching
            </h5>
          </a>
          <p>
            FROM EUR{" "}
            <span className="border px-2 pt-1 text-2xl bg-black text-white rounded-md">
              3.00
            </span>{" "}
            / IMG
          </p>
          <p className="mb-3 font-normal text-gray-500 mt-3 ">
          High-end retouching includes advanced adjustments where items are replaced, removed, or added
          </p>
          {/* <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <svg
            className="w-7 h-7 text-gray-500  mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
            Colour correction
            </h5>
          </a>
          <p>
            FROM EUR{" "}
            <span className="border px-2 pt-1 text-2xl bg-black text-white rounded-md">
              1.50
            </span>{" "}
            / IMG
          </p>
          <p className="mb-3 font-normal text-gray-500 mt-3">
          Colour correction ensures a consistent expression, even though the starting point may require some improvement
          </p>
          {/* <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
        </div>
      </div>
      <div className=" flex justify-center my-4">
        <Button variant="contained" sx={{ margin: "0px 5px 0px 0px" }}>
          Free Trial
        </Button>
        <Button variant="contained" sx={{ margin: "0px 5px 0px 0px" }}>
          Get A Quote
        </Button>
       
      </div>
    </div>
  );
}
