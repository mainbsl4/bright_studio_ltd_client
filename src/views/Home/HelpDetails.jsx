import { Icon } from "@iconify/react/dist/iconify.js";

export default function HelpDetails() {
  return (
    <div>
      <div className="w-full p-4 my-[100px] text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          24/7- Support & Service
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Hand Made Clipping Path Service Provider Company
        </p>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Our customer support team is available 24 hours a day and you can
          expect a replay within 15 minutes! Now you can contact us at any time
          24/7/365
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <Icon icon="lets-icons:order" className="text-3xl mr-2" />
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                PLACE AN ORDER
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <Icon icon="solar:tag-price-bold" className="text-3xl mr-2" />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">GET PRICE IDEA</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
