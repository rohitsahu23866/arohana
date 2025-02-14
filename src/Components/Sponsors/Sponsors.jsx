import React from 'react';
import sponsors from './sponsors.json';
import bg from '../../assets/Bg/sponsor.jpg';

const Sponsors = () => {

  const convertToTitleCase = (str) => {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const renderSponsorSection = (sponsorType) => {
    return (
      <div className='flex flex-col mb-8'>
        <h2 className='text-2xl lg:text-3xl xl:text-5xl font-bold mb-8 font-serif text-blue-700 opacity-90 text-center transform hover:scale-110 transition-transform' style={{ WebkitTextStroke: '0.3px linear-darkBlue' }}>
          {convertToTitleCase(sponsorType)}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center'>
          {sponsors[sponsorType].map(sponsor => (
            <div key={sponsor.id} className="w-full max-w-xs mx-auto overflow-hidden rounded-lg">
              <div className="mx-auto overflow-hidden rounded-full" style={{ width: '150px', height: '150px', filter: 'drop-shadow(0 0 15px rgba(0, 0, 255, 0.5))', clipPath: 'circle(50%)' }}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.company_name}
                  className="object-cover transition duration-300 ease-in-out transform hover:scale-110"
                  style={{ width: '100%', height: '100%', clipPath: 'circle(50%)' }}
                />
              </div>
              <div className="p-4 shadow-lg flex flex-col items-center">
                <p className="text-lg font-semibold text-black transform hover:scale-110 transition-transform">
                  <a href={sponsor.web_url} target="_blank" rel="noopener noreferrer" className='hover:text-gray-500'>{sponsor.company_name}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="sponsor-wrapper w-full flex flex-col items-center">
      <div className="py-5">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 mb-8 font-serif
         text-haldi-orange  opacity-80 text-shadow-lg transform hover:scale-110 transition-transform " 
         style={{ WebkitTextStroke: '0.2px yellow' }}>
          SPONSORS</h1>
      </div>
      <div>
        {Object.keys(sponsors).map(sponsorType => (
          renderSponsorSection(sponsorType)
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
