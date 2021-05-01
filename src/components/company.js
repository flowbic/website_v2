// export default function Company() {
//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//         <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
//           Trusted by over 5 very average small businesses
//         </p>
//         <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://flowbic.se/img/edaider-logo_new.svg"
//               alt="Workcation"
//             />
//           </div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://flowbic.se/img/ohcleo_logo_bred.png"
//               alt="Mirage"
//             />
//           </div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://flowbic.se/img/pay2me_logo.svg"
//               alt="Tuple"
//             />
//           </div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://www.kostfonden.se/wp-content/uploads/2015/02/kostfonden_logo.png"
//               alt="Laravel"
//             />
//           </div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://flowbic.se/img/urban_tv_croped.png"
//               alt="StaticKit"
//             />
//           </div>
//           <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
//             <img
//               className="max-h-12"
//               src="https://flowbic.se/img/beanloop_logo.svg"
//               alt="Statamic"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */
export default function Company() {
  return (
    <div className="bg-white mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by the world's most average companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Vi kodar gärna som konsulter hos andra team eller på projekt inom
              vårt team. Vi utvecklar applikationer för både webb och mobila
              enheter.
            </p>
            <div className="mt-8 sm:flex">
              {/* <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Kontakta oss
                </a>
              </div> */}
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                 href="mailto:kontakt@flowbic.se"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200  transform hover:-translate-y-1 hover:scale-110"
                >
                  Kontakta oss
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://flowbic.se/img/edaider-logo_new.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://flowbic.se/img/ohcleo_logo_bred.png"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://pay2me.se/icons/pay2me_logo_dark.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://www.kostfonden.se/wp-content/uploads/2015/02/kostfonden_logo.png"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://flowbic.se/img/urban_tv_croped.png"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://flowbic.se/img/beanloop_logo.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
