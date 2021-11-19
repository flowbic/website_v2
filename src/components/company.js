import beanloopLogo from "../assets/images/beanloop_logo.svg";
import edaiderLogo from "../assets/images/edaider-logo_new.svg";
import ohCleoLogo from "../assets/images/ohcleo_logo_light.png";
import urbanTvLogo from "../assets/images/urban_tv_small.png";
import kostfondenLogo from "../assets/images/kostfonden_logo.png";
import FadeInSection from "./fadeIn/fadeIn";

/* This example requires Tailwind CSS v2.0+ */
export default function Company() {
  const openLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="bg-white lg:mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Vi utvecklar applikationer för både webb och mobila enheter
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Vi kodar gärna som konsulter hos andra team eller på projekt inom
              vårt team.
            </p>
            <p className="mt-1 max-w-3xl text-lg text-gray-500">
                Vi gillar att skapa dynamiska webbplattformar och applikationer med höga krav på funktionalitet.
                Vår utvecklingsprocess är agil med nära kommunikation mellan kunder och kollegor.
                Processen gör att vi tillsammans med kunden kan vara kreativa hela vägen från idé till produkt.
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
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200  transform hover:-translate-y-1"
                >
                  Kontakta oss
                </a>
              </div>
            </div>
          </div>
          <div
            className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 cursor-pointer"
          >

            <div
              onClick={() => openLink("https://edaider.com/")}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
            >
              <img className="max-h-12" src={edaiderLogo} alt="Workcation" />
            </div>
            <div
              onClick={() => openLink("https://ohcleo.com/")}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
            >
              <img className="max-h-12" src={ohCleoLogo} alt="Mirage" />
            </div>
            <div
              onClick={() => openLink("https://pay2me.se")}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
            >
              <img
                className="max-h-12"
                src="https://pay2me.se/icons/pay2me_logo_dark.svg"
                alt="Tuple"
              />
            </div>
            <div
              onClick={() => openLink("https://www.kostfonden.se/")}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
            >
              <img className="max-h-12" src={kostfondenLogo} alt="Laravel" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img className="max-h-12" src={urbanTvLogo} alt="StaticKit" />
            </div>
            <div
              onClick={() => openLink("https://beanloop.se/")}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200"
            >
              <img className="max-h-12" src={beanloopLogo} alt="Statamic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
