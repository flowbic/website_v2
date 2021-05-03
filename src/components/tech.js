import FadeInSection from "./fadeIn/fadeIn";

/* This example requires Tailwind CSS v2.0+ */
export default function Tech() {
  return (
    <div className="bg-white mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
          <FadeInSection>
        <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Våra absoluta favorittekniker
            </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Vi täcker utveckling för iOS, Android och Webb.
                De flesta projekt vi själva är med och startar upp kommer använda någon av våra favorittekniker,
                men vi är bekväma med många andra tekniker.
                
            </p>
          </div>
          </FadeInSection>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-4 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-gray-200">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
                alt="Laravel"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
