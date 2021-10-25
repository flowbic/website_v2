// import teamOutsideImage from "../assets/images/flowbic.webp";
import FadeInSection from './fadeIn/fadeIn';
import teamImage from '../assets/images/group_one.webp';

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  // { label: 'Pågående projekt', value: '8' },
  // { label: 'Medlemmar i teamet', value: '5' },
  // { label: "Aktiva projekt", value: "7" },
  // { label: "Raised", value: "$25M" },
];

export default function AboutUs() {
  return (
    <div className='relative bg-white sm:py-24 mb-5 '>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72' />
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={504}
              height={492}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            {/* Testimonial card*/}
            <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src={teamImage}
                alt=''
              />
              <div
                className='absolute inset-0'
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-0' />
              <div className='relative px-8'></div>
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}
          <FadeInSection>
            <div className='pt-12 sm:pt-16 lg:pt-20'>
              <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
                Vi älskar att koda
              </h2>
              <div className='mt-6 text-gray-500 space-y-6'>
                <p className='text-lg'>
                  Flowbic är ett tight utvecklarteam som älskar att koda och du
                  hittar oss i både Kalmar och Stockholm men vi jobbar gärna
                  remote.
                </p>
                <p className='text-base leading-7'>
                  Vi gillar att koda dynamiska webbplattformar och applikationer
                  med höga krav på funktionalitet.
                </p>
                <p className='text-base leading-7'></p>
              </div>
            </div>

            {/* Stats section */}

            <div className='mt-10'>
              <dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='border-t-2 border-gray-100 pt-6'
                  >
                    <dt className='text-base font-medium text-gray-500'>
                      {stat.label}
                    </dt>
                    <dd className='text-3xl font-extrabold tracking-tight text-gray-900'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className='mt-10'>
                {/* <a href="#" className="text-base font-medium text-indigo-600">
                  {" "}
                  Learn more about how we're changing the world{" "}
                  <span aria-hidden="true">&rarr;</span>{" "}
                </a> */}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
